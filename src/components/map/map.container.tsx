import {useEffect, useState} from "react";

import './map.styles.css';

import useMapbox from "../../hooks/use-mapbox";
import mapboxgl from "mapbox-gl";
import {AddLocationContainer} from "../add-location/add-location.container";
import {IonLoading, IonSpinner} from "@ionic/react";

interface ContainerProps {
}

const MapContainer: React.FC<ContainerProps> = () => {
    // Invoke the custom `useMapbox` hook, passing the ID of the map container
    // This will initialize the Mapbox instance and associate it with the div#map element
    const {clickedLocation, setClickedLocation, isLoading, mapRef} = useMapbox("map");


    return (  <>
            {isLoading && (
                <>
                    <IonSpinner className="spinner" name="circular" color="light" />
                    <div className="map-overlay" /> {/* Add the overlay when loading */}
                </>
            )}

            <div id="map" className={isLoading ? 'map-loading' : ''} />

            {clickedLocation && <AddLocationContainer location={clickedLocation} mapRef={mapRef} setClickedLocation={setClickedLocation} />}
        </>
    );
};

export default MapContainer;
