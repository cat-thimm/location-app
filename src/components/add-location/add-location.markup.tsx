import React from "react";

import {SuccessModal} from "../success-modal";
import {LocationEditorContainer} from "../location-editor";

import {AddLocationProps} from "./add-location.types";
import "./add-location.styles.css"

export const AddLocation = ({
                                locationName,
                                location,
                                showSuccessModal,
                                setShowSuccessModal,
                                onSaveForm,
                                setClickedLocation
                            }: AddLocationProps) => {
    return <>
        <SuccessModal infoText="added" locationName={locationName} dismiss={() => setShowSuccessModal(false)} isOpen={showSuccessModal}/>

        {location &&
            <LocationEditorContainer location={location}
                                     onSaveLocation={onSaveForm}
                                     onFormDismiss={() => setClickedLocation(null)}
            />
        }
    </>
}