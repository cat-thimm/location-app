import {IonButton} from "@ionic/react";
import React from "react";

import {MenuProps} from "./menu.types";
import "./menu.styles.css"


export const Menu = ({disabled, paragraphText, headline, onClick, children, buttonText, className}: MenuProps) => {
    return <form onSubmit={(e) => {
        e.preventDefault();
        if (onClick) onClick();
    }}
                 className={className}>
        <div className="menu-header-wrapper">
            <div className="menu-header">
                <h1>{headline}</h1>
                {disabled !== null &&
                    <IonButton type="submit" fill="clear" disabled={disabled}>{buttonText}</IonButton>}
            </div>
            <p>
                {paragraphText}
            </p>
        </div>
        <div className="menu-wrapper">
            {children}
        </div>
    </form>
}