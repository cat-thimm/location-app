import React from "react";
import { IonHeader, IonSearchbar, IonToolbar} from "@ionic/react";

import {Menu} from "../menu";
import {MenuItem} from "../menu-item";
import {LocationTypes} from "../add-location/add-location.types";

import {SearchLocationProps} from "./search-location.types";
import "./search-location.styles.css"

export const SearchLocation = ({results, handleInput}: SearchLocationProps) => {
    return <>
        <IonHeader>
            <IonToolbar>
                <IonSearchbar animated placeholder="Search for location"
                              onIonInput={(ev) => handleInput(ev)}></IonSearchbar>
            </IonToolbar>
        </IonHeader>
        {results.length > 0 &&
            <Menu headline="Search Results" paragraphText="Enter a query above" disabled={null} className="menu">
                <div className="search-location-list">
                    {results.map((result) => (
                        <MenuItem item={{
                            id: result.id,
                            type: result.type as LocationTypes,
                            title: result.name,
                            description: result.description
                        }}
                                  onClick={() => {}}
                        />
                    ))}
                </div>
            </Menu>
        }
    </>
}