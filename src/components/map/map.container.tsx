import React from "react";
import {IonPopover, IonSpinner} from "@ionic/react";

import {useMapbox} from "../../hooks/use-mapbox";

import {AddLocationContainer} from "../add-location";

import './map.styles.css';

export const MapContainer = () => {
    const {isLoading} = useMapbox()

    return (<>
            {isLoading && (
                <>
                    <IonSpinner className="spinner" name="circular" color="light"/>
                    <div className="map-overlay"/>
                </>
            )}

            <div id="map" className={isLoading ? 'map-loading' : ''}/>

            {/*<IonPopover trigger={trigger}>*/}
            {/*    Hallo :)*/}
            {/*</IonPopover>*/}


            <AddLocationContainer />
        </>
    );
};
