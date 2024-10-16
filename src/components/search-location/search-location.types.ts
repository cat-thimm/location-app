import {Location} from "../../types/location";
import mapboxgl from "mapbox-gl";

export interface SearchLocationContainerProps {
    locations: Location[];
    mapRef:  React.MutableRefObject<mapboxgl.Map | null>
}

export interface SearchLocationProps {
    results: Location[];
    handleInput: (ev: Event) => void;
    isPopoverOpen: boolean;
    setIsPopoverOpen: (isOpen: boolean) => void;
    flyToLocation: (location: Location) => void;
}