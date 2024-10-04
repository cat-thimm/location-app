import {useEffect, useRef} from "react";
import mapboxgl from 'mapbox-gl';

import {getMap} from "../../mapbox";

const useMapbox = (containerId: string) => {
    const mapRef = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
        mapRef.current = getMap(containerId);

        if (mapRef.current) {
            mapRef.current.addControl(
                new mapboxgl.GeolocateControl({
                    positionOptions: {
                        enableHighAccuracy: true,
                    },
                    trackUserLocation: true,
                    showUserHeading: true,
                })
            );
        }

        // Cleanup on component unmount
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
            }
        };
    }, []);
};

export default useMapbox;
