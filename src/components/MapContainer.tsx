import {useEffect, useRef} from "react";
import mapboxgl from 'mapbox-gl';

import './MapContainer.css';

import {getMap} from "../../mapbox";
import useMapbox from "../hooks/useMapbox";

interface ContainerProps {
}

const MapContainer: React.FC<ContainerProps> = () => {

    useMapbox("map");

    return (
        <div id="map-container">
            <div id="map" />
        </div>
    );
};

export default MapContainer;
