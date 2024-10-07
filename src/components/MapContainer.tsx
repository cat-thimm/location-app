import './MapContainer.css';

import useMapbox from "../hooks/useMapbox";

interface ContainerProps {
}

const MapContainer: React.FC<ContainerProps> = () => {
    useMapbox("map");

    return (
        <div id="map"/>
    );
};

export default MapContainer;
