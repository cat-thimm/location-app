import mapboxgl, {NavigationControl} from 'mapbox-gl/dist/mapbox-gl.js';


mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;


export const getMap = (containerId: string) => {
    const map = new mapboxgl.Map({
        container: containerId,
        style: 'mapbox://styles/mapbox/streets-v12',
        zoom: 17.15,
        pitch: 15,
        center: [-74.5, 40] // dummy center value
    })

    map.addControl(new NavigationControl());

    map.on("load", () => {
        window.dispatchEvent(new Event("resize"));

        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(function(position) {
        //         map.flyTo({
        //             center: [position.coords.latitude, position.coords.longitude],
        //             essential: true // this animation is considered essential with respect to prefers-reduced-motion
        //         });
        //     });
        // }
    });


    return map
}


