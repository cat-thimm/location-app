import {Preferences} from "@capacitor/preferences";

import {Location} from "../types/location";

export const getAllLocations = async (): Promise<{ locations: Location[] }> => {
    const {value: mapDataString} = await Preferences.get({key: 'mapData'});

    return mapDataString ? JSON.parse(mapDataString) : {locations: []};
}

// Delete a location by its id or any unique property
export const deleteLocation = async (locationId: string) => {
    const mapData = await getAllLocations();

    // Filter out the location with the specified id
    const updatedLocations = mapData.locations.filter(
        (location) => location.id !== locationId
    );

    const marker = document.getElementById(locationId)

    if (marker) {
        marker.remove()
    }

    // Update the mapData in storage
    await Preferences.set({
        key: "mapData",
        value: JSON.stringify({locations: updatedLocations}),
    });
};

// Update a location by its id or any unique property
export const updateLocation = async (updatedLocation: Location) => {
    const mapData = await getAllLocations();

    // Map through locations and update the location that matches the ID
    const updatedLocations = mapData.locations.map((location) =>
        location.id === updatedLocation.id ? updatedLocation : location
    );

    // Update the mapData in storage
    await Preferences.set({
        key: 'mapData',
        value: JSON.stringify({locations: updatedLocations}),
    });
};


// Store new location in localStorage and update the local json file
export const storeLocation = async (location: Location) => {
    const mapData = await getAllLocations()

    mapData.locations.push(location);

    await Preferences.set({
        key: 'mapData',
        value: JSON.stringify(mapData)
    });
};

export const initializeStorage = async () => {
    const {value: isInitialized} = await Preferences.get({key: 'isInitialized'});

    if (!isInitialized) {
        const response = await fetch('./src/data/locations.json');
        const initialData = await response.json();

        await Preferences.set({
            key: 'mapData',
            value: JSON.stringify(initialData)
        });

        await Preferences.set({
            key: 'isInitialized',
            value: 'true'
        });
    }
};