import {useEffect, useRef, useState} from "react";
import mapboxgl, {Marker} from 'mapbox-gl';
import {Preferences} from "@capacitor/preferences";

import {drawMarker, getMap} from "../helpers/mapbox";

import "../style.css"

/**
 * Custom hook to initialize and manage a Mapbox map instance.
 *
 * @param containerId - The ID of the HTML container element where the Mapbox map will be rendered.
 */
const useMapbox = (containerId: string) => {
    const mapRef = useRef<mapboxgl.Map | null>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [clickedLocation, setClickedLocation] = useState<{
        latitude: number,
        longitude: number,
        address: string
    } | null>(null)

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

                await drawMarkersFromJSON(mapRef.current);

            }

            mapRef.current.on('click', async (event) => {
                setIsLoading(true);

                const {lng, lat} = event.lngLat;
                const address = await getAddressFromCoordinates(lng, lat);

                setClickedLocation({latitude: lat, longitude: lng, address});

                setIsLoading(false);
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

    return {clickedLocation, setClickedLocation, isLoading, mapRef};
};


/**
 * Function to get the address from coordinates using the Mapbox Geocoding API.
 *
 * @param lng - Longitude
 * @param lat - Latitude
 * @returns The address as a string
 */
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


const drawMarkersFromJSON = async (map: mapboxgl.Map | null) => {
    const mapData = await Preferences.get({
        key: 'mapData',
    })

    if (mapData.value) {
        const locations = JSON.parse(mapData?.value).locations


        locations.forEach((location: any) => {

            if (map) {
                drawMarker(map, {
                    coordinates: {
                        lat: location.latitude,
                        lng: location.longitude,
                    },
                    properties: {
                        title: location.name,
                        comment: location.description,
                        locationType: location.type,
                    },
                })
            }
        })
    }
}


export default useMapbox;
