import {useEffect, useMemo,  useState} from "react";
import {IonInputCustomEvent, IonTextareaCustomEvent, TextareaInputEventDetail} from "@ionic/core/dist/types/components";
import {InputInputEventDetail} from "@ionic/react";
import mapboxgl from "mapbox-gl";

import {drawMarker} from "../../helpers/mapbox";
import {storeLocation} from "../../helpers/storage";
import {MENU_ITEMS} from "../../data/location-menu";

import {AddLocation} from "./add-location.markup";
import {AddLocationContainerProps, LocationTypes} from "./add-location.types";


export const AddLocationContainer = ({location, mapRef, setClickedLocation, setRefetch}: AddLocationContainerProps) => {
    const [selectedType, setSelectedType] = useState<LocationTypes | null>(null)
    const [showDescriptionForm, setShowDescriptionForm] = useState<boolean>(false)
    const [locationName, setLocationName] = useState("")
    const [locationComment, setLocationComment] = useState("")
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    // Memoize the marker instance, so it's only created when location or mapRef changes
    const marker = useMemo(() => new mapboxgl.Marker(), []);

    useEffect(() => {
        if (mapRef && mapRef.current) {
            if (location) {
                marker
                    .setLngLat({lat: location.latitude, lon: location.longitude})
                    .addTo(mapRef.current);
            } else {
                marker.remove();
            }
        }

        // Cleanup: remove the marker when the component unmounts or location changes
        return () => {
            marker.remove()
        };
    }, [location, mapRef, marker]);

    const onChangeLocationName = (e: IonInputCustomEvent<InputInputEventDetail>) => {
        if (e.detail.value) {
            setLocationName(e.detail.value)
        }
    }

    const onChangeLocationComment = (e: IonTextareaCustomEvent<TextareaInputEventDetail>) => {
        if (e.detail.value) {
            setLocationComment(e.detail.value)
        }
    }


    const onSaveForm = async (): Promise<void> => {
        if (mapRef?.current && selectedType !== null && location !== null) {
            drawMarker(mapRef?.current, {
                coordinates: {lat: location.latitude, lon: location.longitude},
                properties: {title: locationName, comment: locationComment, locationType: selectedType},
            })

            await storeLocation({
                id: Math.random().toString(),
                type: selectedType,
                description: locationComment,
                latitude: location.latitude,
                longitude: location.longitude,
                address: location.address,
                name: locationName,
                visitDate: new Date().toLocaleDateString(),
            })

            // set flag to refetch locations
            setRefetch(true)

            // Reset Form and Location
            setClickedLocation(null)
            setSelectedType(null)
            setLocationName("")
            setLocationComment("")
            setShowDescriptionForm(false)

            // show successModal
            setShowSuccessModal(true)
        }
    }

    return <AddLocation menuItems={MENU_ITEMS}
                        location={location}
                        selectedType={selectedType}
                        setSelectedType={setSelectedType}
                        showDescriptionForm={showDescriptionForm}
                        setShowDescriptionForm={setShowDescriptionForm}
                        locationName={locationName}
                        onChangeLocationName={onChangeLocationName}
                        locationComment={locationComment}
                        onChangeLocationComment={onChangeLocationComment}
                        onSaveForm={onSaveForm}
                        setClickedLocation={setClickedLocation}
                        showSuccessModal={showSuccessModal}
                        setShowSuccessModal={setShowSuccessModal}
    />

}