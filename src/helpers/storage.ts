import {Preferences} from "@capacitor/preferences";

import {Location} from "@/types/location";

export const getAllLocations = async (): Promise<{ locations: Location[] }> => {
    const {value: mapDataString} = await Preferences.get({key: "mapData"});

    return mapDataString ? JSON.parse(mapDataString) : {locations: []};
};

// Delete a location by its id or any unique property
export const deleteLocation = async (locationId: string) => {
    const mapData = await getAllLocations();

    // Filter out the location with the specified id
    const updatedLocations = mapData.locations.filter(
        (location) => location.id !== locationId
    );

    await Preferences.set({
        key: "mapData",
        value: JSON.stringify({locations: updatedLocations}),
    });

    return updatedLocations
};

// Update a location by its id or any unique property
export const updateLocation = async (updatedLocation: Location) => {
    const mapData = await getAllLocations();

    // Map through locations and update the location that matches the ID
    const updatedLocations = mapData.locations.map((location) =>
        location.id === updatedLocation.id ? updatedLocation : location
    );

    await Preferences.set({
        key: "mapData",
        value: JSON.stringify({locations: updatedLocations}),
    });

    return updatedLocations
};

// Store new location in localStorage and update the local json file
export const storeLocation = async (location: Location) => {
    const mapData = await getAllLocations();

    mapData.locations.push(location);

    await Preferences.set({
        key: "mapData",
        value: JSON.stringify(mapData),
    });

    return mapData.locations;
};

import initialLocations from "../data/locations.json";

export const initializeStorage = async () => {
    const {value: isInitialized} = await Preferences.get({
        key: "isInitialized",
    });

    if (!isInitialized) {
        await Preferences.set({
            key: "mapData",
            value: JSON.stringify(initialLocations),
        });

        await Preferences.set({
            key: "isInitialized",
            value: "true",
        });
    }
};
