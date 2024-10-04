import mapboxgl, {NavigationControl} from 'mapbox-gl/dist/mapbox-gl.js';


mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;


export const getMap = (containerId: string, lat?: number, lng?: number) => {
    const map = new mapboxgl.Map({
        container: containerId,
        style: 'mapbox://styles/mapbox/streets-v12',
        zoom: 17.15,
        pitch: 15,
        center: [-74.5, 40],
    })

    map.addControl(new NavigationControl());

    map.on("load", () => {
        window.dispatchEvent(new Event("resize"));
    });

    return map
}


