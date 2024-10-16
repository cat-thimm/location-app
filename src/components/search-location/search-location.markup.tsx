import React from "react";
import {IonContent, IonHeader, IonModal, IonPopover, IonSearchbar, IonToolbar} from "@ionic/react";

import {Menu} from "../menu";
import {MenuItem} from "../menu-item";
import {LocationTypes} from "../add-location/add-location.types";

import {SearchLocationProps} from "./search-location.types";
import "./search-location.styles.css"

export const SearchLocation = ({results, handleInput, isPopoverOpen, setIsPopoverOpen, flyToLocation}: SearchLocationProps) => {
    return <div className="search-location">
        <IonHeader>
            <IonToolbar>
                <IonSearchbar
                    animated
                    placeholder="Search for location"
                    onIonInput={handleInput}
                    id="searchbar"
                    onIonCancel={() => setIsPopoverOpen(false)}
                />
            </IonToolbar>
            {isPopoverOpen &&
                <Menu
                    headline={`Search Results (${results.length})`}
                    paragraphText="Enter a query above"
                    disabled={null}
                    className="menu"
                >
                    {results.length > 0 ? <div className="search-location-list">
                            {results.map((result) => (
                                <MenuItem
                                    key={result.id}
                                    item={{
                                        type: result.type as LocationTypes,
                                        title: result.name,
                                        description: result.description,
                                    }}
                                    onClick={() => {
                                        flyToLocation(result)
                                    }}
                                />
                            ))}
                        </div> :
                        <p className="info-text">We could not find any location that fits your query.</p>
                    }
                </Menu>
            }
        </IonHeader>

    </div>
}