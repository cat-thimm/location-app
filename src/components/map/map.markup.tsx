import {IonButton, IonCol, IonContent, IonIcon, IonItemDivider, IonPopover, IonSpinner} from "@ionic/react";
import {AddLocationContainer} from "../add-location";
import React from "react";
import {MapProps} from "./map.types";

export const Map = ({isLoading, clickedMarker, setClickedMarker}: MapProps) => {
    return (<>
            {isLoading && (
                <>
                    <IonSpinner className="spinner" name="circular" color="light"/>
                    <div className="map-overlay"/>
                </>
            )}

            <div id="map" className={isLoading ? 'map-loading' : ''}/>

            {clickedMarker && <IonPopover trigger={clickedMarker?.id}
                                          isOpen={true}
                                          onIonPopoverDidDismiss={() => setClickedMarker(undefined)}
                                          arrow={true}
            >
                <IonContent>
                    <IonCol>
                        <IonItemDivider>
                            <IonCol>
                                <div className="map-popover-title">
                                    <IonIcon src={`/assets/icons/${clickedMarker.type}.svg`}/>
                                    {clickedMarker.name}
                                </div>
                                <p>{clickedMarker.address}</p>

                            </IonCol>
                        </IonItemDivider>
                        {clickedMarker.description &&
                            <IonItemDivider>
                                {clickedMarker.description}
                            </IonItemDivider>
                        }
                        <div className="map-popover-buttons">
                            <IonButton fill="clear" onClick={() => {
                            }}>Edit</IonButton>
                            <IonButton fill="clear" color="danger" onClick={() => {
                            }}>Delete</IonButton>
                        </div>
                    </IonCol>
                </IonContent>
            </IonPopover>}

            <AddLocationContainer/>
        </>
    );
}