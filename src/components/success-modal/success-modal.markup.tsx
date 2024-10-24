import React from "react";
import {
    IonButton,
    IonButtons,
    IonContent,
    IonIcon,
    IonImg,
    IonModal,
    IonTitle,
    IonToolbar
} from "@ionic/react";

import "./success-modal.styles.css"

import {SupportModalProps} from "./success-modal.types";

export const SuccessModal = ({isOpen, locationName, dismiss, infoText}: SupportModalProps) => {
    return <IonModal id="success-modal" isOpen={isOpen}>
        <IonContent style={{display: "flex", alignItems: "center"}}>
            <IonToolbar>
                <IonTitle className="ion-text-center">Success!</IonTitle>
                <IonButtons slot="end">
                    <IonButton color="light" onClick={() => dismiss()}>
                        <IonIcon src="/assets/icons/close.svg"/>
                    </IonButton>
                </IonButtons>
            </IonToolbar>

            <div className="success-modal">

                <IonImg src="/assets/icons/success.png"/>

                The location <strong>{locationName}</strong> was successfully {infoText}.
            </div>

        </IonContent>
    </IonModal>
}