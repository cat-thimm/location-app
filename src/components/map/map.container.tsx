import React from "react";
import {IonSpinner} from "@ionic/react";

import useMapbox from "../../hooks/use-mapbox";

import {AddLocationContainer} from "../add-location";

import './map.styles.css';

export const MapContainer = () => {
    // Invoke the custom `useMapbox` hook, passing the ID of the map container
    // This will initialize the Mapbox instance and associate it with the div#map element
    const {clickedLocation, setClickedLocation, isLoading, mapRef} = useMapbox("map");

    return (<>
            {isLoading && (
                <>
                    <IonSpinner className="spinner" name="circular" color="light"/>
                    <div className="map-overlay"/>
                </>
            )}

            <div id="map" className={isLoading ? 'map-loading' : ''}/>

            <AddLocationContainer location={clickedLocation} mapRef={mapRef}
                                  setClickedLocation={setClickedLocation}/>
        </>
    );
};
