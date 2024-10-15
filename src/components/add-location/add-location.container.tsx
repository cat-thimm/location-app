import {useEffect, useMemo,  useState} from "react";
import {IonInputCustomEvent, IonTextareaCustomEvent, TextareaInputEventDetail} from "@ionic/core/dist/types/components";
import {InputInputEventDetail} from "@ionic/react";
import mapboxgl from "mapbox-gl";

import {drawMarker} from "../../helpers/mapbox";
import {storeLocation} from "../../helpers/storage";

import {AddLocation} from "./add-location.markup";
import {AddLocationContainerProps, LocationTypes, MenuItem} from "./add-location.types";

const MENU_ITEMS: MenuItem[] = [
    {id: "1", type: LocationTypes.RESTAURANT, title: "Restaurant", description: "Add restaurants, cafes and others."},
    {id: "2", type: LocationTypes.TOURISTIC, title: "Touristic Attraction", description: "Any touristic place"},
    {id: "3", type: LocationTypes.PUBLIC_FACILITY, title: "Public Facility", description: "Any public place"},
    {id: "4", type: LocationTypes.EVENT_VENUE, title: "Event Venue", description: "Event locations can be marked here"},
    {id: "5", type: LocationTypes.CUSTOM, title: "Custom Event", description: "Your custom event"},
]

export const AddLocationContainer = ({location, mapRef, setClickedLocation}: AddLocationContainerProps) => {
    const [selectedType, setSelectedType] = useState<LocationTypes | null>(null)
    const [showDescriptionForm, setShowDescriptionForm] = useState<boolean>(false)
    const [locationName, setLocationName] = useState("")
    const [locationComment, setLocationComment] = useState("")

    // Memoize the marker instance, so it's only created when location or mapRef changes
    const marker = useMemo(() => new mapboxgl.Marker(), []);

    useEffect(() => {
        if (mapRef && mapRef.current) {
            if (location) {
                marker
                    .setLngLat({lat: location.latitude, lon: location.longitude})
                    .addTo(mapRef.current);
            } else {
                marker.remove();
            }
        }

        // Cleanup: remove the marker when the component unmounts or location changes
        return () => {
            marker.remove()
        };
    }, [location, mapRef, marker]);

    const onChangeLocationName = (e: IonInputCustomEvent<InputInputEventDetail>) => {
        if (e.detail.value) {
            setLocationName(e.detail.value)
        }
    }
    const onChangeLocationComment = (e: IonTextareaCustomEvent<TextareaInputEventDetail>) => {
        if (e.detail.value) {
            setLocationComment(e.detail.value)
        }
    }

    const onSaveForm = async (): Promise<void> => {
        if (mapRef?.current && selectedType !== null && location !== null) {
            drawMarker(mapRef?.current, {
                coordinates: {lat: location.latitude, lon: location.longitude},
                properties: {title: locationName, comment: locationComment, locationType: selectedType},
            })

            await storeLocation({
                id: Math.random().toString(),
                type: selectedType,
                description: locationComment,
                latitude: location.latitude,
                longitude: location.longitude,
                address: location.address,
                name: locationName,
                visitDate: new Date().toLocaleDateString(),
            })

            // Reset Form and Location
            setClickedLocation(null)
            setSelectedType(null)
            setLocationName("")
            setLocationComment("")
            setShowDescriptionForm(false)
        }
    }

    return <AddLocation menuItems={MENU_ITEMS}
                        location={location}
                        selectedType={selectedType}
                        setSelectedType={setSelectedType}
                        showDescriptionForm={showDescriptionForm}
                        setShowDescriptionForm={setShowDescriptionForm}
                        locationName={locationName}
                        onChangeLocationName={onChangeLocationName}
                        locationComment={locationComment}
                        onChangeLocationComment={onChangeLocationComment}
                        onSaveForm={onSaveForm}
                        setClickedLocation={setClickedLocation}
    />

}