import React from "react";
import {IonIcon, IonInput, IonItem, IonLabel, IonModal, IonTextarea} from '@ionic/react';

import {Menu} from "../menu";
import {MenuItem} from "../menu-item";

import {AddLocationProps} from "./add-location.types";
import "./add-location.styles.css"
import {SuccessModal} from "./partial/success-modal.partial";

export const AddLocation = ({
                                menuItems,
                                location,
                                selectedType,
                                setSelectedType,
                                showDescriptionForm,
                                setShowDescriptionForm,
                                onChangeLocationName,
                                locationName,
                                onChangeLocationComment,
                                locationComment,
                                onSaveForm,
                                setClickedLocation,
                                showSuccessModal,
                                setShowSuccessModal
                            }: AddLocationProps) => {


    return <>
        <SuccessModal locationName={locationName} dismiss={() => setShowSuccessModal(false)} isOpen={showSuccessModal}/>

        <IonModal className="add-location"
                  initialBreakpoint={0.6}
                  breakpoints={[0.2, 0.6]}
                  backdropDismiss={true}
                  backdropBreakpoint={0.3}
                  isOpen={location !== null}
                  onIonModalDidDismiss={() => {
                      setClickedLocation(null)
                  }}
                  mode="ios"
        >

            {!showDescriptionForm ?
                <Menu headline={"Add new location"} paragraphText={location?.address ?? ""}
                      disabled={selectedType === null}
                      buttonText={"Next"} onClick={() => setShowDescriptionForm(true)}
                      onDismiss={() => setClickedLocation(null)}
                >
                    <>
                        {menuItems.map(item => {
                            return (
                                <MenuItem key={item.id} item={item} onClick={() => setSelectedType(item.type)}
                                          showSelectedIcon={selectedType === item.type}/>
                            )
                        })}
                    </>
                </Menu> :
                <Menu headline={"Add description"} paragraphText={location?.address ?? ""}
                      disabled={locationName === ""}
                      buttonText={"Save"} onClick={onSaveForm}
                      onDismiss={() => setClickedLocation(null)}
                >
                    <>
                        <div className="add-location-menu-item" onClick={() => {
                            setShowDescriptionForm(false)
                        }}>
                            <div className="add-location-menu-item-label" style={{alignItems: "center"}}>
                                <IonIcon
                                    aria-hidden="true"
                                    src={`/assets/icons/${selectedType}.svg`}/>
                                <IonLabel>
                                    {
                                        menuItems.find(item => item.type === selectedType)?.title
                                    }
                                </IonLabel>
                            </div>
                            <IonIcon
                                aria-hidden="true"
                                src={`/assets/icons/renew.svg`}/>
                        </div>
                        <IonItem>
                            <IonInput type="text" label="Location Name" labelPlacement="stacked"
                                      placeholder="Please enter a name..." value={locationName}
                                      onIonInput={onChangeLocationName} required></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonTextarea label="(Optional) Comment" labelPlacement="stacked"
                                         placeholder="Enter a comment for this location ..." value={locationComment}
                                         onIonInput={onChangeLocationComment}></IonTextarea>
                        </IonItem>
                    </>
                </Menu>
            }
        </IonModal>
    </>
}