export interface AddLocationContainerProps {
    location: {
        latitude: number;
        longitude: number;
        address: string;
    }
}

export interface AddLocationProps {
    menuItems: MenuItem[];
    location: {
        latitude: number;
        longitude: number;
        address: string;
    };
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