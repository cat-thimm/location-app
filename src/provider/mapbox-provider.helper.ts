import mapboxgl from "mapbox-gl";
import {LocationTypes} from "@/components/add-location/add-location.types";

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


// Helper function to load custom icons for each LocationType
export const loadImages = async (map: mapboxgl.Map) => {
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