import {useEffect, useRef} from "react";
import mapboxgl from 'mapbox-gl';

import {getMap} from "../helpers/mapbox";
import {requestLocation} from "../helpers/permissions";

const useMapbox = (containerId: string) => {
    const mapRef = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
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

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
            }
        }

    }, []);
};

export default useMapbox;
