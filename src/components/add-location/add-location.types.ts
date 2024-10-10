import mapboxgl from "mapbox-gl";

export interface AddLocationContainerProps {
    location: {
        latitude: number;
        longitude: number;
        address: string;
    } | null
    mapRef?: React.RefObject<mapboxgl.Map>;
    setClickedLocation: (location: {
        latitude: number;
        longitude: number;
        address: string;
    } | null) => void
}

export interface AddLocationProps {
    menuItems: MenuItem[];
    location: {
        latitude: number;
        longitude: number;
        address: string;
    } | null;
    setClickedLocation: (location: {
        latitude: number;
        longitude: number;
        address: string;
    } | null) => void
    selectedType: LocationTypes | null;
    setSelectedType: (type: LocationTypes | null) => void;
    showDescriptionForm: boolean;
    setShowDescriptionForm: (showDescriptionForm: boolean) => void;
    locationName: string;
    onChangeLocationName: (event: any) => void;
    locationComment: string;
    onChangeLocationComment: (event: any) => void;
    onSaveForm: () => void;
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