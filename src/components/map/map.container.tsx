import React, {useState} from "react";

import {useMapbox} from "@/hooks/use-mapbox";
import {Location} from "@/types/location";

import {Map} from "./map.markup";
import './map.styles.css';

export const MapContainer = () => {
    const {isLoading, clickedMarker, setClickedMarker, updateMarker, deleteMarker} = useMapbox()

    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)


    const onDeleteLocation = async () => {
        if (clickedMarker) {
            setShowSuccessModal(true)
            await deleteMarker(clickedMarker.id)
            setClickedMarker(undefined)
        } else {
            console.error("No Marker clicked.")
        }
    }

    const onUpdateLocation = async (location: Location): Promise<void> => {
        await updateMarker(location)
        setClickedMarker(undefined)
        setShowEditForm(false)
    }

    return <Map isLoading={isLoading}
                clickedMarker={clickedMarker}
                setClickedMarker={setClickedMarker}
                onDeleteLocation={onDeleteLocation}
                showSuccessModal={showSuccessModal}
                setShowSuccessModal={setShowSuccessModal}
                setShowEditForm={setShowEditForm}
                showEditForm={showEditForm}
                onUpdateLocation={onUpdateLocation}
    />
};
