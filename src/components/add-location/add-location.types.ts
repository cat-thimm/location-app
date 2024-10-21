import mapboxgl from "mapbox-gl";

export interface IAddLocation {
    latitude: number;
    longitude: number;
    address: string;
}


export interface AddLocationProps {
    menuItems: MenuItem[];
    location: IAddLocation | null;
    setClickedLocation: (location: IAddLocation | null) => void
    selectedType: LocationTypes | null;
    setSelectedType: (type: LocationTypes | null) => void;
    showDescriptionForm: boolean;
    setShowDescriptionForm: (showDescriptionForm: boolean) => void;
    locationName: string;
    onChangeLocationName: (event: any) => void;
    locationComment: string;
    onChangeLocationComment: (event: any) => void;
    onSaveForm: () => void;
    showSuccessModal: boolean;
    setShowSuccessModal: (showSuccessModal: boolean) => void;
}

export interface SupportModalProps {
    locationName: string;
    dismiss: () => void;
    isOpen: boolean;
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