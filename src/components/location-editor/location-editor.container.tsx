import {useState} from "react";
import uuid from "react-uuid";
import {IonInputCustomEvent, IonTextareaCustomEvent, TextareaInputEventDetail} from "@ionic/core/dist/types/components";
import {InputInputEventDetail} from "@ionic/react";

import {LocationTypes} from "../add-location/add-location.types";

import {LocationEditorContainerProps} from "./location-editor.types";
import {LocationEditor} from "./location-editor.markup";

export const LocationEditorContainer = ({onSaveLocation, onFormDismiss, location}: LocationEditorContainerProps) => {
    const [showDescriptionForm, setShowDescriptionForm] = useState<boolean>(false)
    const [selectedType, setSelectedType] = useState<LocationTypes | null>("type" in location ? location?.type as LocationTypes : null)
    const [locationName, setLocationName] = useState("name" in location ? location.name : "")
    const [locationComment, setLocationComment] = useState("description" in location ? location.description : "")

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

    const resetForms = () => {
        onFormDismiss()

        setSelectedType(null)
        setLocationName("")
        setLocationComment("")
        setShowDescriptionForm(false)
    }

    const onSaveForm = () => {
        if (selectedType !== null) {
            let newLocation
            if ("visitDate" in location) {
                // Case Location is edited
                newLocation = {
                    id: location.id,
                    type: selectedType,
                    description: locationComment,
                    latitude: location.latitude,
                    longitude: location.longitude,
                    address: location.address,
                    name: locationName,
                    visitDate: location.visitDate,
                }
            } else {
                // Case Location is being created
                newLocation = {
                    id: uuid(),
                    type: selectedType,
                    description: locationComment,
                    latitude: location.latitude,
                    longitude: location.longitude,
                    address: location.address,
                    name: locationName,
                    visitDate: new Date().toLocaleDateString(),
                }
            }

            resetForms()
            onSaveLocation(newLocation)
        }
    }

    return <LocationEditor location={location}
                           locationName={locationName}
                           onChangeLocationComment={onChangeLocationComment}
                           locationComment={locationComment}
                           onChangeLocationName={onChangeLocationName}
                           showDescriptionForm={showDescriptionForm}
                           setShowDescriptionForm={setShowDescriptionForm}
                           selectedType={selectedType}
                           setSelectedType={setSelectedType}
                           resetForms={resetForms}
                           onSaveForm={onSaveForm}
    />
}