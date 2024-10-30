import React, {useMemo, useState} from "react";

import {useMapbox} from "../../hooks/use-mapbox";
import {deleteLocation, updateLocation} from "../../helpers/storage";
import {Location} from "../../types/location";

import './map.styles.css';
import {Map} from "./map.markup";

export const MapContainer = () => {
    const {isLoading, clickedMarker, setClickedMarker, setRefetch, setRebuildMap, setIsLoading} = useMapbox()

    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)


    const onDeleteLocation = async () => {
        if (clickedMarker) {
            setIsLoading(true)
            setRefetch(true)
            setRebuildMap(true)
            setShowSuccessModal(true)
            await deleteLocation(clickedMarker.id)
            setClickedMarker(undefined)
            setIsLoading(false)
        } else {
            console.error("No Marker clicked.")
        }
    }

    const onUpdateLocation = async (location: Location): Promise<void> => {
        await updateLocation(location)
        setClickedMarker(undefined)
        setShowEditForm(false)
        setRefetch(true)
        setRebuildMap(true)
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
