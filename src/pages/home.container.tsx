import React, {useEffect, useMemo, useState} from "react";
import {IonPage,} from '@ionic/react';

import {getAllLocations} from "../helpers/storage";
import {Location} from "../types/location";
import {SearchLocationContainer} from "../components/search-location";
import {MapContainer} from "../components/map";
import useMapbox from "../hooks/use-mapbox";

const HomeContainer: React.FC = () => {
    // Invoke the custom `useMapbox` hook, passing the ID of the map container
    // This will initialize the Mapbox instance and associate it with the div#map element
    const {clickedLocation, setClickedLocation, isLoading, mapRef} = useMapbox("map");
    const [refetch, setRefetch] = useState<boolean>(false);

    const [locations, setLocations] = useState<Location[]>([]); // Adjust the type as needed

    useEffect(() => {
        // Fetch the locations and set them in the state
        const fetchLocations = async () => {
            const fetchedLocations = await getAllLocations();
            setLocations(fetchedLocations.locations);
        };

        fetchLocations().then();
    }, [refetch]);

    return (
        <IonPage>
            <SearchLocationContainer locations={locations} mapRef={mapRef}/>
            <MapContainer mapRef={mapRef}
                          setClickedLocation={setClickedLocation}
                          clickedLocation={clickedLocation}
                          isLoading={isLoading}
                          setRefetch={setRefetch}
            />
        </IonPage>
    );
};

export default HomeContainer;
