import React from "react";
import {
    IonButton,
    IonButtons,
    IonContent,
    IonIcon,
    IonImg,
    IonItem,
    IonModal,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {SupportModalProps} from "../add-location.types";

import "../add-location.styles.css"

export const SuccessModal = ({isOpen, locationName, dismiss}: SupportModalProps) => {
    return <IonModal id="success-modal" isOpen={isOpen}>
        <IonContent style={{display: "flex", alignItems: "center"}}>
            <IonToolbar>
                <IonTitle>Success!</IonTitle>
                <IonButtons slot="end">
                    <IonButton color="light" onClick={() => dismiss()}>
                        <IonIcon src="/assets/icons/close.svg"/>
                    </IonButton>
                </IonButtons>
            </IonToolbar>

            <div className={"success-modal "}>

                <IonImg src="/assets/icons/success.png"/>

                The location <strong>{locationName}</strong> was successfully added.
            </div>

        </IonContent>
    </IonModal>
}