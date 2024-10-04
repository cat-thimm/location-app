import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2F0aXRoaW1tIiwiYSI6ImNtMXU3N2FodDA5bmIycG9udXQwZWR2OTYifQ.NXttkfK70Y3thTCSZoBFDg';

export const getMap = (containerId: string) => {
    return new mapboxgl.Map({
        container: containerId,
        style: 'mapbox://styles/mapbox/streets-v11'
    })
}


