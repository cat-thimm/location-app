import {IonIcon, IonInput, IonItem, IonLabel, IonModal, IonTextarea} from "@ionic/react";
import React from "react";

import {MENU_ITEMS} from "@/data/location-menu";

import {Menu} from "../menu";
import {MenuItem} from "../menu-item";

import {LocationEditorProps} from "./location-editor.types";

export const LocationEditor = ({
                                   showDescriptionForm,
                                   setShowDescriptionForm,
                                   onChangeLocationName,
                                   locationName,
                                   onChangeLocationComment,
                                   locationComment,
                                   setSelectedType,
                                   selectedType,
                                   resetForms,
                                   location,
                                   onSaveForm,
                               }: LocationEditorProps) => {
    return <IonModal className="add-location"
                     initialBreakpoint={0.6}
                     breakpoints={[0.2, 0.6]}
                     backdropDismiss={true}
                     backdropBreakpoint={0.3}
                     isOpen={location !== null}
                     onIonModalDidDismiss={resetForms}
                     mode="ios"
    >

        {!showDescriptionForm ?
            <Menu headline={"Add new location"} paragraphText={location?.address ?? ""}
                  disabled={selectedType === null}
                  buttonText={"Next"} onClick={() => setShowDescriptionForm(true)}
                  onDismiss={resetForms}
            >
                <>
                    {MENU_ITEMS.map(item => {
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
                  onDismiss={resetForms}
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
                                    MENU_ITEMS.find(item => item.type === selectedType)?.title
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
}