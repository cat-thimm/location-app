import React from "react";
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonLabel,
    IonModal,
    IonSpinner, IonTitle, IonToolbar
} from "@ionic/react";

import {AddLocationContainer} from "../add-location";

import {MapProps} from "./map.types";

import "./map.styles.css"
import {SuccessModal} from "../success-modal";

export const Map = ({
                        isLoading,
                        clickedMarker,
                        setClickedMarker,
                        onDeleteLocation,
                        showSuccessModal,
                        setShowSuccessModal
                    }: MapProps) => {
    return (<>
            {isLoading && (
                <>
                    <IonSpinner className="spinner" name="circular" color="light"/>
                    <div className="map-overlay"/>
                </>
            )}

            <div id="map" className={isLoading ? 'map-loading' : ''}/>

            <SuccessModal locationName={clickedMarker?.name ?? ""} dismiss={() => setShowSuccessModal(false)}
                          isOpen={showSuccessModal}/>
            {clickedMarker && <IonModal
                initialBreakpoint={0.45}
                breakpoints={[0, 0.45]}
                backdropDismiss={true}
                backdropBreakpoint={0.3}
                isOpen={true}
                onIonModalDidDismiss={() => setClickedMarker(undefined)}
            >
                <IonHeader>
                    <IonToolbar>
                        <IonButtons
                            slot="start">
                            <IonButton color="medium" onClick={() => setClickedMarker(undefined)}>
                                <IonIcon src="/assets/icons/close.svg"/>
                            </IonButton>
                        </IonButtons>
                        <IonTitle>
                            <span className="map-popover-title ion-align-items-center ion-justify-content-center">
                                <IonIcon src={`/assets/icons/${clickedMarker.type}.svg`}/>
                                {clickedMarker.name}
                            </span>
                        </IonTitle>

                        <IonButtons slot="end">
                            <IonButton
                                onClick={() => {
                                }}
                                strong={true}>Edit
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <div className="map-popover-content">
                        <>
                            <IonLabel style={{fontWeight: "500"}}>Address</IonLabel>
                            <p>{clickedMarker.address}</p>
                        </>
                        {clickedMarker.description !== "" &&
                            <>
                                <IonLabel style={{fontWeight: "500"}}>Comment</IonLabel>
                                <p style={{fontStyle: "italic"}}>"{clickedMarker.description}"</p>
                            </>
                        }

                        <IonButton shape="round" fill="clear" style={{width: "100%"}} color="danger"
                                   onClick={onDeleteLocation}>Delete Location</IonButton>
                    </div>
                </IonContent>
            </IonModal>}

            <AddLocationContainer/>
        </>
    );
}