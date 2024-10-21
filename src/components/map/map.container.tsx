import React from "react";

import {useMapbox} from "../../hooks/use-mapbox";

import './map.styles.css';
import {Map} from "./map.markup";

export const MapContainer = () => {
    const {isLoading, clickedMarker, setClickedMarker} = useMapbox()

    return <Map isLoading={isLoading} clickedMarker={clickedMarker} setClickedMarker={setClickedMarker}/>
};
