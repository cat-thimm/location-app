import {useEffect, useRef} from "react";
import mapboxgl from 'mapbox-gl';

import {getMap} from "../helpers/mapbox";
import {requestLocation} from "../helpers/permissions";

/**
 * Custom hook to initialize and manage a Mapbox map instance.
 *
 * @param containerId - The ID of the HTML container element where the Mapbox map will be rendered.
 */
const useMapbox = (containerId: string) => {
    const mapRef = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {

        /**
         * Asynchronously sets up the Mapbox map.
         * This function initializes the map instance and adds necessary controls.
         */
        async function setupMap() {

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
            }

        }

        setupMap().then()


        // Cleanup function to remove the map when the component is unmounted
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
            }
        }

    }, []);
};

export default useMapbox;
