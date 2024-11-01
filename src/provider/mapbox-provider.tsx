import {ReactNode, useEffect, useRef, useState} from "react";
import mapboxgl, {Marker} from 'mapbox-gl';

import {createMarkerElement, getMap} from "@/helpers/mapbox";
import {LocationTypes} from "@/components/add-location/add-location.types";
import {Location} from "@/types/location";
import {getAllLocations} from "@/helpers/storage";

import {MapboxContext} from "./mapbox-provider.context";
import {getAddressFromCoordinates} from "./mapbox-provider.helper";
import {
    clusterCountConfig,
    clustersBackgroundConfig,
    clustersCountBackgroundConfig,
    clustersSymbolConfig, getLocationSource, unclusteredPointConfig
} from "./mapbox-provider.config";

const INITIAL_FILTERS = [
    LocationTypes.RESTAURANT,
    LocationTypes.TOURISTIC,
    LocationTypes.CUSTOM,
    LocationTypes.PUBLIC_FACILITY,
    LocationTypes.EVENT_VENUE,
]

export const MapboxProvider = ({containerId, children}: { containerId: string, children: ReactNode }) => {
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const markerRef = useRef<Marker | null>(null);

    const [refetch, setRefetch] = useState<boolean>(false);
    const [rebuildMap, setRebuildMap] = useState(false);
    const [locations, setLocations] = useState<Location[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [activeFilters, setActiveFilters] = useState<LocationTypes[]>(INITIAL_FILTERS);
    const [clickedMarker, setClickedMarker] = useState<Location | undefined>();

    const [clickedLocation, setClickedLocation] = useState<{
        latitude: number;
        longitude: number;
        address: string;
    } | null>(null);

    useEffect(() => {
        const map = mapRef.current;

        if (clickedMarker && map) {
            if (markerRef.current) {
                markerRef.current.remove();
            }

            map.flyTo({
                center: [clickedMarker.longitude, clickedMarker.latitude],
                essential: true,
            });

            markerRef.current = new Marker()
                .setLngLat({lat: clickedMarker.latitude, lng: clickedMarker.longitude})
                .addTo(map);
        } else if (clickedMarker === undefined && markerRef.current) {
            markerRef.current.remove();
            markerRef.current = null;
        }
    }, [clickedMarker]);

    useEffect(() => {
        const fetchLocations = async () => {
            const fetchedLocations = await getAllLocations();
            setLocations(fetchedLocations.locations);
            setRefetch(false);
        };

        fetchLocations();
    }, [refetch]);

    useEffect(() => {
        setupMap();

        return () => {
            const map = mapRef.current;
            if (map) {
                map.remove();
            }
        };
    }, [containerId, activeFilters]);

    useEffect(() => {
        if (rebuildMap) {
            setupMap().then(() => {
                setRebuildMap(false);
            });
        }
    }, [rebuildMap]);

    const filterLocationsByActiveFilters = (locations: Location[]) => {
        return locations.filter(location => activeFilters.includes(location.type as LocationTypes));
    };

    async function setupMap() {
        setIsLoading(true);

        mapRef.current = await getMap(containerId);
        const map = mapRef.current;

        const fetchedLocations = await getAllLocations();

        const filteredLocations = filterLocationsByActiveFilters(fetchedLocations.locations);

        if (map) {
            // Load custom icons for each LocationType
            const addImages = async () => {
                const images = [
                    {url: `/assets/icons/${LocationTypes.RESTAURANT}.png`, id: LocationTypes.RESTAURANT},
                    {url: `/assets/icons/${LocationTypes.TOURISTIC}.png`, id: LocationTypes.TOURISTIC},
                    {url: `/assets/icons/${LocationTypes.PUBLIC_FACILITY}.png`, id: LocationTypes.PUBLIC_FACILITY},
                    {url: `/assets/icons/${LocationTypes.EVENT_VENUE}.png`, id: LocationTypes.EVENT_VENUE},
                    {url: `/assets/icons/${LocationTypes.CUSTOM}.png`, id: LocationTypes.CUSTOM},
                ];
                const promises = images.map(imageData =>
                    new Promise<void>((resolve, reject) => {
                        map.loadImage(imageData.url, (error, image) => {
                            if (error) {
                                reject(error);
                                return;
                            }
                            map.addImage(imageData.id, image!);
                            resolve();
                        });
                    })
                );
                await Promise.all(promises);
            };

            await addImages();

            map.addControl(
                new mapboxgl.GeolocateControl({
                    positionOptions: {enableHighAccuracy: true},
                    trackUserLocation: true,
                    showUserHeading: true,
                    showUserLocation: true,
                })
            );

            map.on("load", async () => {
                if (!map.getSource('locations')) {
                    map.addSource('locations', getLocationSource(filteredLocations));

                    map.addLayer(clustersBackgroundConfig);

                    map.addLayer(clustersSymbolConfig);

                    map.addLayer(clustersCountBackgroundConfig);

                    map.addLayer(clusterCountConfig);

                    map.addLayer(unclusteredPointConfig);

                    const markers: any = {};
                    let markersOnScreen: any = {};

                    function updateMarkers() {
                        const newMarkers: any = {};
                        const features = map.querySourceFeatures('locations');

                        // for every cluster on the screen, create an HTML marker for it (if we didn't yet),
                        // and add it to the map if it's not there already
                        for (const feature of features) {
                            let coords: any
                            if ("coordinates" in feature.geometry) {
                                coords = feature.geometry.coordinates;
                            } // Always get the coordinates
                            const props = feature.properties;

                            if (!props?.cluster) {
                                // Handle unclustered points
                                const id = props?.id; // Use the unique ID of the location
                                let marker = markers[id];

                                if (!marker) {
                                    const el = createMarkerElement(id, props?.type);
                                    marker = markers[id] = new mapboxgl.Marker({
                                        element: el
                                    }).setLngLat(coords);

                                    el.addEventListener("click", (event) => {
                                        event.stopPropagation()
                                        setClickedMarker({
                                            id: props!.id,
                                            type: props!.type,
                                            latitude: coords[1],
                                            longitude: coords[0],
                                            visitDate: props!.visitDate,
                                            address: props!.address,
                                            name: props!.name,
                                            description: props!.description,
                                        })
                                    })
                                }

                                newMarkers[id] = marker;

                                if (!markersOnScreen[id]) {
                                    marker.addTo(map);
                                }
                            }
                        }

                        // for every marker we've added previously, remove those that are no longer visible
                        for (const id in markersOnScreen) {
                            if (!newMarkers[id]) markersOnScreen[id].remove();
                        }
                        markersOnScreen = newMarkers;
                    }


                    // after the GeoJSON data is loaded, update markers on the screen on every frame
                    map.on('render', () => {
                        if (map.getSource('locations') && map.isSourceLoaded('locations')) {
                            updateMarkers();
                        }
                    });

                }


                map.on('click', async (event) => {
                    setIsLoading(true);

                    const {lng, lat} = event.lngLat;
                    const address = await getAddressFromCoordinates(lng, lat);

                    setClickedLocation({latitude: lat, longitude: lng, address});

                    setIsLoading(false);
                });

            });

            setIsLoading(false);
        }
    }

    return (
        <MapboxContext.Provider
            value={{
                clickedMarker,
                setClickedMarker,
                activeFilters,
                setActiveFilters,
                clickedLocation,
                setClickedLocation,
                isLoading,
                setIsLoading,
                mapRef,
                locations,
                refetch,
                setRefetch,
                rebuildMap,
                setRebuildMap
            }}
        >
            {children}
        </MapboxContext.Provider>
    );
};
