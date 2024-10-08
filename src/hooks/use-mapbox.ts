import {useEffect, useRef, useState} from "react";
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

    const [clickedLocation, setClickedLocation] = useState<{
        latitude: number,
        longitude: number,
        address: string
    } | null>(null)

    const [savedLocation, setSavedLocation] = useState<boolean>(false);


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


            mapRef.current.on('click', async (event) => {
                if (!savedLocation) {

                    const {lng, lat} = event.lngLat;
                    const address = await getAddressFromCoordinates(lng, lat);

                    setClickedLocation({latitude: lat, longitude: lng, address});

                    if(mapRef.current) {

                        // Set marker options.
                        const marker = new mapboxgl.Marker({
                            color: "#FFFFFF",
                            draggable: true
                        }).setLngLat([lng, lat])
                            .addTo(mapRef.current);
                    }
                }
            });


        }

        setupMap().then()

        // Cleanup function to remove the map when the component is unmounted
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
            }
        }

    }, [containerId]);

    return clickedLocation;
};

const getAddressFromCoordinates = async (lng: number, lat: number): Promise<string> => {
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${import.meta.env.VITE_MAPBOX_KEY}`);

    if (!response.ok) {
        console.error("Failed to fetch address:", response.statusText);
        return "";
    }

    const data = await response.json();
    const features = data.features;

    // Return the first address found or null if not found
    return features.length > 0 ? features[0].place_name : "";
};


export default useMapbox;
