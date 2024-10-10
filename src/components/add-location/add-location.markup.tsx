import React from "react";
import {IonIcon, IonInput, IonItem, IonLabel, IonTextarea} from '@ionic/react';

import {Menu} from "../menu/menu.markup";

import {AddLocationProps} from "./add-location.types";
import "./add-location.styles.css"

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
                                onSaveForm
                            }: AddLocationProps) => {
    return <div className="add-location">
        {!showDescriptionForm ?
            <Menu headline={"Add new location"} paragraphText={location.address} disabled={selectedType === null}
                  buttonText={"Next"} onClick={() => setShowDescriptionForm(true)}>{menuItems.map(item => {
                return <div className="add-location-menu-item" key={item.id} onClick={() => setSelectedType(item.type)}>
                    <div className="add-location-menu-item-label">
                        <IonIcon
                            aria-hidden="true"
                            src={`/assets/icons/${item.type}.svg`}/>
                        <IonLabel>
                            <h1 style={{fontSize: "16px"}}>{item.title}</h1>
                            <p>{item.description}</p>
                        </IonLabel>
                    </div>
                    {
                        selectedType === item.type && <IonIcon
                            src={`/assets/icons/check.svg`}/>
                    }
                </div>
            })}</Menu> :
            <Menu headline={"Add description"} paragraphText={location.address} disabled={locationName === ""}
                  buttonText={"Save"} onClick={onSaveForm}>
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
            </Menu>
        }
    </div>
}