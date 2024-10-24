import {Preferences} from "@capacitor/preferences";
import mapboxgl from 'mapbox-gl';

import {LocationTypes} from "../components/add-location/add-location.types";
import {drawMarker} from "../helpers/mapbox";
import {Location} from "../types/location";
import {getAllLocations} from "../helpers/storage";

/**
 * Function to get the address from coordinates using the Mapbox Geocoding API.
 *
 * @param lng - Longitude
 * @param lat - Latitude
 * @returns The address as a string
 */
export const getAddressFromCoordinates = async (lng: number, lat: number): Promise<string> => {
    const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${import.meta.env.VITE_MAPBOX_KEY}`
    );

    if (!response.ok) {
        console.error("Failed to fetch address:", response.statusText);
        return "";
    }

    const data = await response.json();
    const features = data.features;

    // Return the first address found or null if not found
    return features.length > 0 ? features[0].place_name : "";
};
