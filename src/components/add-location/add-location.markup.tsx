import React from "react";
import {ReactSVG} from "react-svg";
import {IonButton, IonItemSliding, IonLabel} from '@ionic/react';

import {AddLocationProps} from "./add-location.types";
import "./add-location.styles.css"


export const AddLocation = ({menuItems, location, selectedType, setSelectedType}: AddLocationProps) => {
    return <IonItemSliding className="add-location">
        <div className="add-location-header-wrapper">
            <div className="add-location-header">
                <h1 className="add-location-h1">Add new location</h1>
                <IonButton fill="clear" disabled={selectedType === null}>Next</IonButton>
            </div>
            <p>
                {location.address}
            </p>
        </div>
        <div className="add-location-menu-wrapper ">
            {menuItems.map(item => {
                return <div className="add-location-menu-item" key={item.id} onClick={() => setSelectedType(item.type)}>
                    <div className="add-location-menu-item-label">
                        <ReactSVG
                            src={`/assets/icons/${item.type}.svg`}/>
                        <IonLabel>
                            <h1 style={{fontSize: "16px"}}>{item.title}</h1>
                            <p>{item.description}</p>
                        </IonLabel>
                    </div>
                    {
                        selectedType === item.type && <ReactSVG
                            src={`/assets/icons/check.svg`}/>
                    }
                </div>
            })}
</div>
</IonItemSliding>
}