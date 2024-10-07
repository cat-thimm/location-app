import './MapContainer.css';

import useMapbox from "../hooks/useMapbox";

interface ContainerProps {
}

const MapContainer: React.FC<ContainerProps> = () => {
    // Invoke the custom `useMapbox` hook, passing the ID of the map container
    // This will initialize the Mapbox instance and associate it with the div#map element
    useMapbox("map");

    return (
        <div id="map"/>
    );
};

export default MapContainer;
