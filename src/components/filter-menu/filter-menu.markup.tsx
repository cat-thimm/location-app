import {
    IonButton,
    IonButtons,
    IonCheckbox,
    IonContent,
    IonHeader, IonIcon,
    IonItem,
    IonList, IonModal,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import React from "react";

import {FilterMenuProps} from "./filter-menu.types";

export const FilterMenu = ({
                               onDismiss,
                               showMenu,
                               filterOptions,
                               handleConfirm,
                               handleCheckboxChange,
                               activeFilters
                           }: FilterMenuProps) => {
    return <IonModal mode="ios"
                     backdropDismiss={true}
                     breakpoints={[0, 0.55]}
                     initialBreakpoint={0.85}
                     isOpen={showMenu}
                     onIonModalDidDismiss={onDismiss}>
        <IonHeader>
            <IonToolbar>
                <IonButtons
                    slot="start">
                    <IonButton color="medium" onClick={onDismiss}>
                        <IonIcon src="/assets/icons/close.svg"/>
                    </IonButton>
                </IonButtons>
                <IonTitle>Filter</IonTitle>
                <IonButtons slot="end">
                    <IonButton
                        onClick={handleConfirm}
                        strong={true}>Confirm
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
            <IonList lines="full">
                {filterOptions.map((option, index) => (
                    <IonItem key={index}>
                        <IonIcon src={`/assets/icons/${option.type}.svg`}/>
                        <IonCheckbox justify="space-between"
                                     checked={activeFilters.includes(option.type)}
                                     onIonChange={() => handleCheckboxChange(option.type)}
                        >{option.title}</IonCheckbox>
                    </IonItem>
                ))}
            </IonList>
        </IonContent>
    </IonModal>
}
