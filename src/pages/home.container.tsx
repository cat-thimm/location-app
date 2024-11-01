import React from "react";
import {IonPage,} from '@ionic/react';

import {SearchLocationContainer} from "@/components/search-location";
import {MapContainer} from "@/components/map";

const HomeContainer: React.FC = () => {
    return (
        <IonPage>
            <SearchLocationContainer/>
            <MapContainer />
        </IonPage>
    );
};

export default HomeContainer;
