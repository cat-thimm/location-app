import {IonIcon, IonLabel} from "@ionic/react";
import React from "react";

import {MenuItemProps} from "./menu-item.types";

export const MenuItem = ({item, showSelectedIcon, onClick}: MenuItemProps) => {
    return (
        <div className="add-location-menu-item" onClick={onClick}>
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
                showSelectedIcon && <IonIcon
                    src={`/assets/icons/check.svg`}/>
            }
        </div>
    )
}