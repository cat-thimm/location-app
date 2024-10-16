import React from "react";
import {IonSpinner} from "@ionic/react";

import {AddLocationContainer} from "../add-location";

import './map.styles.css';
import {MapContainerProps} from "./map.types";

export const MapContainer = ({mapRef, setClickedLocation, isLoading, clickedLocation}: MapContainerProps) => {

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
