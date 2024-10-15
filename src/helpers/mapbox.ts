import mapboxgl, {NavigationControl} from 'mapbox-gl/dist/mapbox-gl.js';
import {LngLatLike} from "mapbox-gl";

import {LocationTypes} from "../components/add-location/add-location.types";

import {requestLocation} from "./permissions";
import {Location} from "../types/location";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

export const getMap = async (containerId: string) => {
    const location = await requestLocation()

    const map = new mapboxgl.Map({
        container: containerId,
        style: 'mapbox://styles/mapbox/streets-v12',
        zoom: 17.15,
        pitch: 15,
        center: location !== null ? [location.coords.longitude, location.coords.latitude,] : [30, 70]// dummy center value
    })

    map.addControl(new NavigationControl());

    return map
}

export const drawMarker = (map: mapboxgl.Map, location: {
    coordinates: LngLatLike,
    properties: { title: string, comment: string, locationType: LocationTypes }
}) => {
    // Create a wrapper element where the React component will be rendered
    const el = document.createElement("div");
    el.className = 'marker';

    let backgroundColor;
    switch (location.properties.locationType) {
        case LocationTypes.RESTAURANT:
            backgroundColor = "#7BFFAD";
            break;
        case LocationTypes.TOURISTIC:
            backgroundColor = "#FFE18D";
            break;
        case LocationTypes.EVENT_VENUE:
            backgroundColor = "#FFA4C4";
            break;
        case LocationTypes.PUBLIC_FACILITY:
            backgroundColor = "#B1D7FF";
            break;
        case LocationTypes.CUSTOM:
            backgroundColor = "#FF9999";
            break;
        default:
            backgroundColor = "transparent"; // Default case
            break;
    }

    el.style.background = `${backgroundColor} no-repeat center`;
    el.style.backgroundImage = `url('/assets/icons/${location.properties.locationType}.svg')`

    // Create a Mapbox marker with the element containing the IonIcon
    new mapboxgl.Marker(el)
        .setLngLat(location.coordinates)
        // .setPopup(
        //     new mapboxgl.Popup({ offset: 25 }) // Add popups
        //         .setHTML(
        //             `<h3>${location.properties.title}</h3><p>${location.properties.comment}</p>`
        //         )
        // ) TODO: MN-5579
        .addTo(map);

    el.addEventListener('click', (event) => {
        event.stopPropagation(); // TODO: MN-5579 This prevents the map's click listener from being triggered, solve
    });
};


