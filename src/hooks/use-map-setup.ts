import {useEffect, useRef, useState} from 'react';
import mapboxgl, {GeoJSONFeature, GeoJSONSource, Marker} from 'mapbox-gl';

import {getMap} from '@/helpers/mapbox';
import {Location} from "@/types/location";
import {getAddressFromCoordinates, loadImages} from "@/provider/mapbox-provider.helper";
import {
    clusterCountConfig,
    clustersBackgroundConfig,
    clustersCountBackgroundConfig,
    clustersSymbolConfig,
    getLocationSource,
    getMarkerConfig
} from "@/helpers/mapbox.config";
import {LocationTypes} from "@/components/add-location/add-location.types";
import {deleteLocation, getAllLocations, storeLocation, updateLocation} from "@/helpers/storage";

const INITIAL_FILTERS: LocationTypes[] = [
    LocationTypes.RESTAURANT,
    LocationTypes.TOURISTIC,
    LocationTypes.CUSTOM,
    LocationTypes.PUBLIC_FACILITY,
    LocationTypes.EVENT_VENUE,
];

const LOCATION_SOURCE = "locations";

export const useMapSetup = (containerId: string) => {
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const markerRef = useRef<Marker | null>(null);

    const [clickedMarker, setClickedMarker] = useState<Location | undefined>();
    const [isLoading, setIsLoading] = useState(true);
    const [clickedLocation, setClickedLocation] = useState<{
        latitude: number;
        longitude: number;
        address: string;
    } | null>(null);
    const [activeFilters, setActiveFilters] = useState<LocationTypes[]>(INITIAL_FILTERS);
    const [locations, setLocations] = useState<Location[]>([]);

    // Setup map object, layers and click listeners
    useEffect(() => {
        setupMap().then();

        return () => {
            mapRef.current?.remove();
            mapRef.current = null;
        };
    }, []);

    // Set visibility for each layer based on active filters
    useEffect(() => {
        handleFilterChange()
        setupOnClickListeners()
    }, [activeFilters, locations, mapRef.current]);

    // Update markers when a marker is clicked, centering on it
    useEffect(() => {
        handleMarkerClick()
    }, [clickedMarker, mapRef.current]);

    const handleMarkerClick = () => {
        if (clickedMarker && mapRef.current) {
            // Remove the previous marker, if it exists
            if (markerRef.current) {
                markerRef.current.remove();
            }

            // Center the map on the clicked marker's location
            mapRef.current.flyTo({
                center: [clickedMarker.longitude, clickedMarker.latitude],
                essential: true,
            });

            // Add a new marker at the clicked location
            markerRef.current = new Marker()
                .setLngLat({lat: clickedMarker.latitude, lng: clickedMarker.longitude})
                .addTo(mapRef.current);
        } else if (clickedMarker === undefined && markerRef.current) {
            // Remove the marker if no marker is clicked
            markerRef.current.remove();
            markerRef.current = null;
        }
    }

    const handleFilterChange = () => {
        locations.forEach(location => {
            // Check if the layer ID includes any of the active filters
            const shouldBeVisible = activeFilters.some(filter => location.type.includes(filter));

            if (mapRef.current && mapRef.current.getLayer(location.id)) {
                // Update the layer visibility
                mapRef.current.setLayoutProperty(
                    location.id,
                    'visibility',
                    shouldBeVisible ? 'visible' : 'none'
                );
                mapRef.current.setLayoutProperty(
                    location.id + "-background",
                    'visibility',
                    shouldBeVisible ? 'visible' : 'none'
                );
            }
        });
    }

    const setupMap = async () => {
        try {
            setIsLoading(true);
            const mapData = await getAllLocations();

            setLocations(mapData.locations);

            mapRef.current = await getMap(containerId);

            if (!mapRef.current) {
                return;
            }

            await loadImages(mapRef.current);
            setIsLoading(false);

            mapRef.current.on("load", () => {
                if (mapRef.current) {
                    if (!mapRef.current.getSource(LOCATION_SOURCE)) {
                        mapRef.current.addSource(LOCATION_SOURCE, getLocationSource(mapData.locations));

                        mapRef.current.addLayer(clustersBackgroundConfig);
                        mapRef.current.addLayer(clustersSymbolConfig);
                        mapRef.current.addLayer(clustersCountBackgroundConfig);
                        mapRef.current.addLayer(clusterCountConfig);

                        // Keep in this if statement to make sure markers are updated when locations are initially added
                        mapData.locations.forEach((location) => {
                            createLocationLayer(location);
                        });
                    }
                }
            });
        } catch (err) {
            setIsLoading(false);
        }
    };

    const setupOnClickListeners = () => {
        if (mapRef.current) {
            mapRef.current.on('click', async (event: any) => {
                if (mapRef.current) {
                    const features = mapRef.current.queryRenderedFeatures(event.point, {
                        layers: locations.map((location) => location.id), // Only query specific layers
                    });

                    if (features.length > 0) {
                        // Click on icon
                        const clickedLocationId = features[0].properties?.id;
                        const clickedLocation = locations.find(location => location.id === clickedLocationId);

                        if (clickedLocation) {
                            setClickedMarker(clickedLocation); // Set the clicked marker
                        }

                    } else {
                        // Click on rest of the map
                        setIsLoading(true);
                        const {lng, lat} = event.lngLat;
                        const address = await getAddressFromCoordinates(lng, lat);
                        setClickedLocation({latitude: lat, longitude: lng, address});
                        setIsLoading(false);
                    }
                }
            });

        }

    }

    const createLocationLayer = (location: Location) => {
        const map = mapRef.current;

        if (!map) {
            console.error("ERROR: Map not initialized");
            return null;
        }

        const symbol = location.type;
        const layerId = location.id;

        if (!mapRef.current?.getLayer(layerId)) {
            getMarkerConfig(layerId, symbol).forEach((layer: any) => {
                mapRef.current?.addLayer(layer);
            })
        }
    }

    const updateLocations = (locations: Location[]) => {
        if (mapRef.current) {
            // Update data source to display changes on map
            (mapRef.current.getSource(LOCATION_SOURCE) as GeoJSONSource)?.setData(getLocationSource(locations).data)
            // Locations for search and filtering
            setLocations(locations)
        } else {
            console.error("ERROR: Could not update data source")
        }
    }

    const addMarker = async (location: Location) => {
        setIsLoading(true);

        createLocationLayer(location);

        // Store new location in locale storage
        const newLocations = await storeLocation(location)

        // Update data source and locations state
        updateLocations(newLocations)

        setIsLoading(false);
    }

    const deleteMarker = async (locationId: string) => {
        setIsLoading(true);

        const newLocations = await deleteLocation(locationId)

        updateLocations(newLocations)

        setIsLoading(false)
    }

    const updateMarker = async (location: Location) => {
        setIsLoading(true);

        const updatedLocations = await updateLocation(location)

        updateLocations(updatedLocations)

        setIsLoading(false)
    }

    return {
        mapRef,
        isLoading,
        clickedLocation,
        setClickedLocation,
        clickedMarker,
        setClickedMarker,
        activeFilters,
        locations,
        setActiveFilters,
        addMarker,
        deleteMarker,
        updateMarker,
    };
};
