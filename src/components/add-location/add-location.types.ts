import mapboxgl from "mapbox-gl";

import {Location} from "@/types/location";

export interface IAddLocation {
    latitude: number;
    longitude: number;
    address: string;
}

export interface AddLocationProps {
    location: IAddLocation | null;
    locationName: string
    onSaveForm: (location: Location) => void;
    showSuccessModal: boolean;
    setShowSuccessModal: (showSuccessModal: boolean) => void;
    setClickedLocation: (location: Location | null) => void;
}

export interface MenuItem {
    id: string,
    type: LocationTypes,
    title: string,
    description: string,
}

export enum LocationTypes {
    RESTAURANT = "restaurant",
    TOURISTIC = "touristic",
    PUBLIC_FACILITY = "public_facility",
    EVENT_VENUE = "event",
    CUSTOM = "custom",
}