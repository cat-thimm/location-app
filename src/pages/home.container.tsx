import React, {useEffect, useMemo, useState} from "react";
import {IonPage,} from '@ionic/react';

import {getAllLocations} from "../helpers/storage";
import {Location} from "../types/location";
import {SearchLocationContainer} from "../components/search-location";
import {MapContainer} from "../components/map";

const HomeContainer: React.FC = () => {
    const [locations, setLocations] = useState<Location[]>([]); // Adjust the type as needed

    useEffect(() => {
        // Fetch the locations and set them in the state
        const fetchLocations = async () => {
            const fetchedLocations = await getAllLocations();
            setLocations(fetchedLocations.locations);
        };

        fetchLocations().then();
    }, []);

    return (
        <IonPage>
            <SearchLocationContainer
                locations={locations}/>
            <MapContainer/>
        </IonPage>
    );
};

export default HomeContainer;
