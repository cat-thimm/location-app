import {IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar} from "@ionic/react";
import React from "react";

import {MenuProps} from "./menu.types";
import "./menu.styles.css"

export const Menu = ({
                         disabled,
                         paragraphText,
                         headline,
                         onClick,
                         children,
                         buttonText,
                         className,
                         onDismiss
                     }: MenuProps) => {
    return <form onSubmit={(e) => {
        e.preventDefault();
        if (onClick) onClick();
    }}
                 className={className}>
        {headline && paragraphText && <IonHeader>
            <IonToolbar style={{padding: "8px"}}>
                <IonButtons
                    slot="start">
                    <IonButton color="medium" onClick={onDismiss}>
                        <IonIcon src="/assets/icons/close.svg"/>
                    </IonButton>
                </IonButtons>

                <IonTitle>
                    {headline}
                    <p>{paragraphText}</p>
                </IonTitle>

                <IonButtons slot="end">
                    <IonButton type="submit" fill="clear" disabled={disabled}>{buttonText}</IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>}
        {React.isValidElement(children) && <div className="menu-wrapper">
            {children}
        </div>}
    </form>
}