import mapboxgl, {NavigationControl} from 'mapbox-gl/dist/mapbox-gl.js';
import {requestLocation} from "./permissions";


mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;


export const getMap = async (containerId: string) => {
    const location = await requestLocation()

    const map = new mapboxgl.Map({
        container: containerId,
        style: 'mapbox://styles/mapbox/streets-v12',
        zoom: 17.15,
        pitch: 15,
        center: location !== null ? [location.coords.longitude, location.coords.latitude,] : [30,70]// dummy center value
    })

    map.addControl(new NavigationControl());

    return map
}


