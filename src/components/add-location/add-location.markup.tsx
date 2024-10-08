import "./add-location.styles.css"
import {IonButton, IonItemSliding, IonLabel, IonMenuButton} from '@ionic/react';
import {AddLocationProps} from "./add-location.types";
import {ReactSVG} from "react-svg";
import React from "react";


export const AddLocation = ({menuItems, location}: AddLocationProps) => {
    return <IonItemSliding className="add-location">
        <>
            <div className="add-location-header">
                <h1 className="add-location-h1">Add new location</h1>
                <IonButton fill="clear">Next</IonButton>
            </div>
            <p>
                {location.address}
            </p>
        </>
        <div className="add-location-menu-wrapper ">
            {menuItems.map(item => {
                return <div className="add-location-menu-item" key={item.id}>
                    <ReactSVG
                        src={`/assets/icons/${item.type}.svg`}/>
                    <IonLabel>
                        <h1 style={{fontSize: "16px"}}>{item.title}</h1>
                        <p>{item.description}</p>
                    </IonLabel>

                </div>
            })}
        </div>
    </IonItemSliding>
}