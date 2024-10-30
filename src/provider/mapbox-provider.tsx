import {ReactNode, useEffect, useRef, useState} from "react";
import mapboxgl, {Marker} from 'mapbox-gl';

import {createMarkerElement, getMap} from "../helpers/mapbox";
import {LocationTypes} from "../components/add-location/add-location.types";
import {Location} from "../types/location";
import {getAllLocations} from "../helpers/storage";

import {MapboxContext} from "./mapbox-provider.context";
import "../style.css";
import {getAddressFromCoordinates} from "./mapbox-provider.helper";

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

    async function setupMap() {
        setIsLoading(true);
        mapRef.current = await getMap(containerId);
        const fetchedLocations = await getAllLocations();

        const map = mapRef.current;
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
                    map.addSource('locations', {
                        'type': 'geojson',
                        'data': {
                            'type': 'FeatureCollection',
                            'features': fetchedLocations.locations.map(location => ({
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [location.longitude, location.latitude],
                                },
                                'properties': {
                                    'id': location.id,
                                    'type': location.type,
                                    'name': location.name,
                                    'description': location.description,
                                    'address': location.address,
                                    'visitDate': location.visitDate,
                                }
                            }))
                        },
                        'cluster': true,
                        'clusterRadius': 50,
                        clusterProperties: {
                            has_restaurant: ["any", ["==", ["get", "type"], LocationTypes.RESTAURANT], false],
                            has_touristic: ["any", ["==", ["get", "type"], LocationTypes.TOURISTIC], false],
                            has_public_facility: ["any", ["==", ["get", "type"], LocationTypes.PUBLIC_FACILITY], false],
                            has_event: ["any", ["==", ["get", "type"], LocationTypes.EVENT_VENUE], false],
                            has_custom: ["any", ["==", ["get", "type"], LocationTypes.CUSTOM], false],

                        },
                    });
                    map.addLayer({
                        id: "clusters-background",
                        type: "circle",
                        source: "locations",
                        filter: ["has", "point_count"],
                        paint: {
                            "circle-color": [
                                "case",
                                ["get", "has_restaurant"], "#7BFFAD", // Background color for restaurant
                                ["get", "has_touristic"], "#FFE18D", // Background color for touristic
                                ["get", "has_event"], "#FFA4C4", // Background color for event venue
                                ["get", "has_public_facility"], "#B1D7FF", // Background color for public facility
                                ["get", "has_custom"], "#FF9999", // Background color for custom type
                                "#51bbd6" // Default background color
                            ],
                            "circle-radius": 15, // Adjust as needed for spacing
                        }
                    });
                    map.addLayer({
                        id: 'clusters',
                        type: 'symbol',
                        source: 'locations',
                        filter: ['has', 'point_count'],
                        layout: {
                            'icon-image': [
                                'case',
                                ['get', 'has_restaurant'], LocationTypes.RESTAURANT,
                                ['get', 'has_touristic'], LocationTypes.TOURISTIC,
                                ['get', 'has_public_facility'], LocationTypes.PUBLIC_FACILITY,
                                ['get', 'has_event'], LocationTypes.EVENT_VENUE,
                                ['get', 'has_custom'], LocationTypes.CUSTOM,
                                LocationTypes.PUBLIC_FACILITY // Default icon
                            ],
                            'icon-size': 0.25,
                            'icon-allow-overlap': true,
                        },
                    });
                    map.addLayer({
                        id: 'clusters-count-bg',
                        type: 'circle',
                        source: 'locations',
                        filter: ['has', 'point_count'],
                        paint: {
                            'circle-color': '#E60000',
                            'circle-radius': 8,
                            'circle-translate': [-15, -15],
                        },
                    });
                    map.addLayer({
                        id: 'cluster-count',
                        type: 'symbol',
                        source: 'locations',
                        filter: ['has', 'point_count'],
                        paint: {
                            'text-translate': [-15, -15],
                            'text-color': '#FFFFFF',
                        },
                        layout: {
                            'text-field': '{point_count_abbreviated}',
                            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                            'text-size': 12,
                            'text-allow-overlap': true,
                        },
                    });
                    map.addLayer({
                        id: 'unclustered-point',
                        type: 'symbol',
                        source: 'locations',
                        filter: ['!', ['has', 'point_count']],
                        layout: {
                            'icon-image': ["get", "type"],
                            'icon-size': 0.06,
                            'icon-allow-overlap': true,
                        },
                    });

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
