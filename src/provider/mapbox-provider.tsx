import { ReactNode, useEffect, useRef, useState } from "react";
import mapboxgl, { Marker } from 'mapbox-gl';

import { createMarkerElement, getMap } from "@/helpers/mapbox";
import { LocationTypes } from "@/components/add-location/add-location.types";
import { Location } from "@/types/location";
import { getAllLocations } from "@/helpers/storage";

import { MapboxContext } from "./mapbox-provider.context";
import { getAddressFromCoordinates } from "./mapbox-provider.helper";
import {
    clusterCountConfig,
    clustersBackgroundConfig,
    clustersCountBackgroundConfig,
    clustersSymbolConfig,
    getLocationSource
} from "./mapbox-provider.config";

const INITIAL_FILTERS = [
    LocationTypes.RESTAURANT,
    LocationTypes.TOURISTIC,
    LocationTypes.CUSTOM,
    LocationTypes.PUBLIC_FACILITY,
    LocationTypes.EVENT_VENUE,
];

export const MapboxProvider = ({ containerId, children }: { containerId: string, children: ReactNode }) => {
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

    // Update map when a marker is clicked, centering on it
    useEffect(() => {
        const map = mapRef.current;

        if (clickedMarker && map) {
            // Remove the previous marker, if it exists
            if (markerRef.current) {
                markerRef.current.remove();
            }

            // Center the map on the clicked marker's location
            map.flyTo({
                center: [clickedMarker.longitude, clickedMarker.latitude],
                essential: true,
            });

            // Add a new marker at the clicked location
            markerRef.current = new Marker()
                .setLngLat({ lat: clickedMarker.latitude, lng: clickedMarker.longitude })
                .addTo(map);
        } else if (clickedMarker === undefined && markerRef.current) {
            // Remove the marker if no marker is clicked
            markerRef.current.remove();
            markerRef.current = null;
        }
    }, [clickedMarker]);

    // Fetch all locations on component mount or refetch
    useEffect(() => {
        const fetchLocations = async () => {
            const fetchedLocations = await getAllLocations();
            setLocations(fetchedLocations.locations);
            setRefetch(false);
        };

        fetchLocations();
    }, [refetch]);

    // Initialize the map when component mounts, or active filters change
    useEffect(() => {
        setupMap();

        return () => {
            const map = mapRef.current;
            if (map) {
                map.remove();
            }
        };
    }, [containerId, activeFilters]);

    // Rebuild the map when rebuildMap flag is set
    useEffect(() => {
        if (rebuildMap) {
            setupMap().then(() => {
                setRebuildMap(false);
            });
        }
    }, [rebuildMap]);

    // Filters locations based on selected filters
    const filterLocationsByActiveFilters = (locations: Location[]) => {
        return locations.filter(location => activeFilters.includes(location.type as LocationTypes));
    };

    // Helper function to load custom icons for each LocationType
    const loadImages = async (map: mapboxgl.Map) => {
        const images = [
            { url: `/assets/icons/${LocationTypes.RESTAURANT}.png`, id: LocationTypes.RESTAURANT },
            { url: `/assets/icons/${LocationTypes.TOURISTIC}.png`, id: LocationTypes.TOURISTIC },
            { url: `/assets/icons/${LocationTypes.PUBLIC_FACILITY}.png`, id: LocationTypes.PUBLIC_FACILITY },
            { url: `/assets/icons/${LocationTypes.EVENT_VENUE}.png`, id: LocationTypes.EVENT_VENUE },
            { url: `/assets/icons/${LocationTypes.CUSTOM}.png`, id: LocationTypes.CUSTOM },
        ];

        await Promise.all(images.map(({ url, id }) =>
            new Promise<void>((resolve, reject) => {
                if (map.hasImage(id)) return resolve();

                map.loadImage(url, (error, image) => {
                    if (error) {
                        reject(error);
                    } else {
                        map.addImage(id, image!);
                        resolve();
                    }
                });
            })
        ));
    };

    // Main function to set up the Mapbox map
    async function setupMap() {
        setIsLoading(true);

        // Initialize the map using helper function
        mapRef.current = await getMap(containerId);
        const map = mapRef.current;

        // Fetch and filter locations based on active filters
        const fetchedLocations = await getAllLocations();
        const filteredLocations = filterLocationsByActiveFilters(fetchedLocations.locations);

        if (map) {
            // Load icons for all LocationTypes
            await loadImages(map);

            // Add geolocation control to the map
            map.addControl(
                new mapboxgl.GeolocateControl({
                    // positionOptions: { enableHighAccuracy: true },
                    // showUserHeading: true,
                    showUserLocation: true,
                })
            );

            map.on("load", () => {
                if (!map.getSource('locations')) {
                    map.addSource('locations', getLocationSource(filteredLocations));

                    // Add all layers for clusters and counts
                    map.addLayer(clustersBackgroundConfig);
                    map.addLayer(clustersSymbolConfig);
                    map.addLayer(clustersCountBackgroundConfig);
                    map.addLayer(clusterCountConfig);

                    // Initialize and update markers
                    initMarkers(map);
                }

                // Set up click handler for fetching address of clicked location
                map.on('click', async (event) => {
                    setIsLoading(true);
                    const { lng, lat } = event.lngLat;
                    const address = await getAddressFromCoordinates(lng, lat);
                    setClickedLocation({ latitude: lat, longitude: lng, address });
                    setIsLoading(false);
                });
            });

            setIsLoading(false);
        }
    }

    // Initialize markers and handle marker updates on map render
    const initMarkers = (map: mapboxgl.Map) => {
        const markers: any = {};
        let markersOnScreen: any = {};

        // Method to draw regular markers on the map
        const updateMarkers = () => {
            const newMarkers: any = {};
            const features = map.querySourceFeatures('locations');

            // Create an HTML marker for each visible feature
            for (const feature of features) {
                let coords: any;
                if ("coordinates" in feature.geometry) {
                    coords = feature.geometry.coordinates;
                }
                const props = feature.properties;

                if (!props?.cluster) {
                    const id = props?.id;
                    let marker = markers[id];

                    if (!marker) {
                        const el = createMarkerElement(id, props?.type);
                        marker = markers[id] = new mapboxgl.Marker({ element: el })
                            .setLngLat(coords);

                        // Set up click event for each marker
                        el.addEventListener("click", (event) => {
                            event.stopPropagation(); // Prevent triggering the map's click event
                            setClickedMarker({
                                id: props!.id,
                                type: props!.type,
                                latitude: coords[1],
                                longitude: coords[0],
                                visitDate: props!.visitDate,
                                address: props!.address,
                                name: props!.name,
                                description: props!.description,
                            });
                        });
                    }

                    newMarkers[id] = marker;
                    if (!markersOnScreen[id]) {
                        marker.addTo(map);
                    }
                }
            }

            // Remove markers that are no longer visible
            for (const id in markersOnScreen) {
                if (!newMarkers[id]) markersOnScreen[id].remove();
            }
            markersOnScreen = newMarkers;
        };

        // Update markers on each frame if the locations source is loaded
        map.on('render', () => {
            if (map.getSource('locations') && map.isSourceLoaded('locations')) {
                updateMarkers();
            }
        });
    };

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
