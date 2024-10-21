import {ReactNode, useEffect, useRef, useState} from "react";
import mapboxgl from 'mapbox-gl';

import {getMap} from "../helpers/mapbox";
import {LocationTypes} from "../components/add-location/add-location.types";
import {Location} from "../types/location";
import {getAllLocations} from "../helpers/storage";

import {drawMarkersFromJSON, getAddressFromCoordinates} from "./mapbox-provider.helper";
import {MapboxContext} from "./mapbox-provider.context";

/**
 * The MapboxProvider is a context provider that initializes a Mapbox map instance and manages its state.
 * It provides functionalities for handling map interactions, marker clicks, and filtering locations.
 * This provider also fetches and draws location markers based on the active filters and user clicks,
 * allowing other components to access the map-related states and functions globally through the context.
 */
export const MapboxProvider = ({containerId, children}: { containerId: string, children: ReactNode }) => {
    const mapRef = useRef<mapboxgl.Map | null>(null);

    const [refetch, setRefetch] = useState<boolean>(false);
    const [locations, setLocations] = useState<Location[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [activeFilters, setActiveFilters] = useState<LocationTypes[]>([
        LocationTypes.RESTAURANT,
        LocationTypes.TOURISTIC,
        LocationTypes.CUSTOM,
        LocationTypes.PUBLIC_FACILITY,
        LocationTypes.EVENT_VENUE,
    ]);

    const [clickedMarker, setClickedMarker] = useState<any>(null);

    const [clickedLocation, setClickedLocation] = useState<{
        latitude: number;
        longitude: number;
        address: string;
    } | null>(null);

    useEffect(() => {
        // Fetch the locations and set them in the state
        const fetchLocations = async () => {
            const fetchedLocations = await getAllLocations();
            setLocations(fetchedLocations.locations);
        };

        fetchLocations().then();
    }, [refetch]);

    useEffect(() => {

        setupMap().then();

        // Cleanup function to remove the map when the component is unmounted
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
            }
        };
    }, [containerId, activeFilters]);

    /**
     * Asynchronously sets up the Mapbox map.
     * This function initializes the map instance and adds necessary controls.
     */
    async function setupMap() {
        setIsLoading(true);
        mapRef.current = await getMap(containerId);

        if (mapRef.current) {
            mapRef.current.addControl(
                new mapboxgl.GeolocateControl({
                    positionOptions: {
                        enableHighAccuracy: true,
                    },
                    trackUserLocation: true,
                    showUserHeading: true,
                    showUserLocation: true,
                })
            );
            await drawMarkersFromJSON(mapRef.current, activeFilters, setClickedMarker);
            setIsLoading(false);
        }

        mapRef.current.on('click', async (event) => {
            setIsLoading(true);

            const {lng, lat} = event.lngLat;
            const address = await getAddressFromCoordinates(lng, lat);

            setClickedLocation({latitude: lat, longitude: lng, address});

            setIsLoading(false);
        });
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
                mapRef,
                locations,
                refetch,
                setRefetch
            }}
        >
            {children}
        </MapboxContext.Provider>
    );
};



