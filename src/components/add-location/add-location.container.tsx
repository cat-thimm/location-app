import {useEffect, useMemo, useState} from "react";
import mapboxgl from "mapbox-gl";

import {useMapbox} from "@/hooks/use-mapbox";
import {storeLocation} from "@/helpers/storage";
import {Location} from "@/types/location";


import {AddLocation} from "./add-location.markup";


export const AddLocationContainer = () => {
    const {clickedLocation, mapRef, setClickedLocation, addMarker} = useMapbox()

    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [locationName, setLocationName] = useState("");

    // Memoize the marker instance, so it's only created when location or mapRef changes
    const marker = useMemo(() => new mapboxgl.Marker(), []);

    useEffect(() => {
        if (mapRef && mapRef.current) {
            if (clickedLocation) {
                marker
                    .setLngLat({lat: clickedLocation.latitude, lon: clickedLocation.longitude})
                    .addTo(mapRef.current);
            } else {
                marker.remove();
            }
        }

        // Cleanup: remove the marker when the component unmounts or location changes
        return () => {
            marker.remove()
        };
    }, [clickedLocation, mapRef, marker]);


    const onSaveForm = async (location: Location): Promise<void> => {
        if (mapRef?.current) {
            setLocationName(location.name)

            await addMarker(location)
            // show successModal
            setShowSuccessModal(true)
        }
    }

    return <AddLocation location={clickedLocation}
                        onSaveForm={onSaveForm}
                        showSuccessModal={showSuccessModal}
                        setShowSuccessModal={setShowSuccessModal}
                        locationName={locationName}
                        setClickedLocation={setClickedLocation}
    />

}