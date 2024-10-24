import React from "react";
import {
    IonButton, IonButtons,
    IonCol,
    IonHeader,
    IonIcon,
    IonRow,
    IonSearchbar,
    IonToolbar
} from "@ionic/react";

import {Menu} from "../menu";
import {MenuItem} from "../menu-item";
import {LocationTypes} from "../add-location/add-location.types";
import {FilterMenuContainer} from "../filter-menu";

import {SearchLocationProps} from "./search-location.types";
import "./search-location.styles.css"

export const SearchLocation = ({
                                   results,
                                   handleInput,
                                   isPopoverOpen,
                                   setIsPopoverOpen,
                                   flyToLocation,
                                   showFilterMenu,
                                   setShowFilterMenu,
                                   handleFilterApply,
                                   activeFilters
                               }: SearchLocationProps) => {
    return <>
        <IonHeader>
            <IonToolbar>
                <IonRow className="row">
                    <IonCol>
                        <IonSearchbar
                            style={{padding: 0}}
                            animated
                            placeholder="Search for location"
                            onIonInput={handleInput}
                            id="searchbar"
                            onIonCancel={() => setIsPopoverOpen(false)}
                        />
                    </IonCol>
                    <IonButtons>
                        <IonButton fill="clear" onClick={() => setShowFilterMenu(true)}>
                            <IonIcon src="/assets/icons/filter.svg"/>
                        </IonButton>
                    </IonButtons>
                </IonRow>
            </IonToolbar>
            {isPopoverOpen &&
                <Menu
                    disabled={false}
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
        <FilterMenuContainer
            onDismiss={() => {
                setShowFilterMenu(false)
            }}
            showMenu={showFilterMenu}
            onApplyFilter={handleFilterApply}
            activeFilters={activeFilters}
        />
    </>
}