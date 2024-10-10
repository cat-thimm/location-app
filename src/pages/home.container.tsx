import React from "react";
import {IonPage} from '@ionic/react';

import MapContainer from '../components/map/map.container';

const HomeContainer: React.FC = () => {
    return (
        <IonPage>
            <MapContainer/>
        </IonPage>
    );
};

export default HomeContainer;
