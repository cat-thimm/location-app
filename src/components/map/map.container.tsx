import React, {useState} from "react";

import {useMapbox} from "../../hooks/use-mapbox";
import {deleteLocation} from "../../helpers/storage";

import './map.styles.css';
import {Map} from "./map.markup";

export const MapContainer = () => {
    const {isLoading, clickedMarker, setClickedMarker, setRefetch} = useMapbox()

    const [showSuccessModal, setShowSuccessModal] = useState(false)

    const onDeleteLocation = async () => {
        if(clickedMarker) {

            await deleteLocation(clickedMarker.id)
            setRefetch(true)
            setShowSuccessModal(true)
            setClickedMarker(undefined)
        } else {
            console.error("No Marker clicked.")
        }
    }


    return <Map isLoading={isLoading}
                clickedMarker={clickedMarker}
                setClickedMarker={setClickedMarker}
                onDeleteLocation={onDeleteLocation}
                showSuccessModal={showSuccessModal}
                setShowSuccessModal={setShowSuccessModal}
    />
};
