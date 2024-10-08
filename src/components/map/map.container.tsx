import {useEffect, useState} from "react";

import './map.styles.css';

import useMapbox from "../../hooks/use-mapbox";
import mapboxgl from "mapbox-gl";
import {AddLocationContainer} from "../add-location/add-location.container";

interface ContainerProps {
}

const MapContainer: React.FC<ContainerProps> = () => {
    // Invoke the custom `useMapbox` hook, passing the ID of the map container
    // This will initialize the Mapbox instance and associate it with the div#map element
    const clickedLocation = useMapbox("map");


    return (
        <>
            <div id="map"/>
            {clickedLocation && <AddLocationContainer location={clickedLocation}/>}
        </>
    );
};

export default MapContainer;
