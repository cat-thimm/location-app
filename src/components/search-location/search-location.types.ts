import {Location} from "../../types/location";

import {LocationTypes} from "../add-location/add-location.types";

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