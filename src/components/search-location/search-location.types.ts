import {Location} from "../../types/location";
import mapboxgl from "mapbox-gl";
import {LocationTypes} from "../add-location/add-location.types";

export interface SearchLocationContainerProps {
    locations: Location[];
    mapRef:  React.MutableRefObject<mapboxgl.Map | null>
    activeFilters: LocationTypes[]
    setActiveFilters: (activeFilters: LocationTypes[]) => void
}

export interface SearchLocationProps {
    results: Location[];
    handleInput: (ev: Event) => void;
    isPopoverOpen: boolean;
    setIsPopoverOpen: (isOpen: boolean) => void;
    flyToLocation: (location: Location) => void;
    showFilterMenu: boolean;
    setShowFilterMenu: (showFilterMenu: boolean) => void;
    activeFilters: LocationTypes[]
    handleFilterApply: (activeFilters: LocationTypes[]) => void
}