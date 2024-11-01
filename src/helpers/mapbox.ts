import mapboxgl, {NavigationControl} from 'mapbox-gl';

import {LocationTypes} from "@/components/add-location/add-location.types";

import "../style.css";

import {requestLocation} from "./permissions";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

// Get the map instance
export const getMap = async (containerId: string) => {
    const location = await requestLocation();

    const map = new mapboxgl.Map({
        container: containerId,
        style: 'mapbox://styles/mapbox/streets-v12',
        zoom: 17.15,
        pitch: 15,
        center: location ? [location.coords.longitude, location.coords.latitude] : [30, 70] // Dummy center value
    });

    map.addControl(new NavigationControl());
    return map;
};

export const getMarkerBackgroundColor = (type: LocationTypes) => {
    return {
        [LocationTypes.RESTAURANT]: "#7BFFAD",
        [LocationTypes.TOURISTIC]: "#FFE18D",
        [LocationTypes.EVENT_VENUE]: "#FFA4C4",
        [LocationTypes.PUBLIC_FACILITY]: "#B1D7FF",
        [LocationTypes.CUSTOM]: "#FF9999"
    }[type] || "transparent"
}

// Creates custom HTML marker element with specific styling
export const createMarkerElement = (id: string, type: LocationTypes) => {
    const el = document.createElement("div");

    el.className = 'marker';
    el.id = id;
    // Define background color based on location type
    el.style.backgroundColor = getMarkerBackgroundColor(type);

    const icon = document.createElement("div");
    icon.style.backgroundImage = `url('/assets/icons/${type}.svg')`;
    icon.className = 'marker-icon';

    el.appendChild(icon)

    return el;
}


