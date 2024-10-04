import './MapContainer.css';
import {getMap} from "../../mapbox";

interface ContainerProps {
}

const MapContainer: React.FC<ContainerProps> = () => {

    getMap('map')

    return (
        <div id="map" className="map">
        </div>
    );
};

export default MapContainer;
