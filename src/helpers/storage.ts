import {Preferences} from "@capacitor/preferences";

import {Location} from "../types/location";

export const getAllLocations = async (): Promise<{locations: Location[]}> => {
    const {value: mapDataString} = await Preferences.get({key: 'mapData'});

    return  mapDataString ? JSON.parse(mapDataString) : {locations: []};
}

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