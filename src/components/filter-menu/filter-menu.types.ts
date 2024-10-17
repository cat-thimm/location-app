import {LocationTypes, MenuItem} from "../add-location/add-location.types";

export interface FilterMenuContainerProps {
    onDismiss: () => void;
    showMenu: boolean;
    onApplyFilter: (filters: LocationTypes[]) => void;
    activeFilters: LocationTypes[];
}

export interface FilterMenuProps {
    onDismiss: () => void;
    showMenu: boolean;
    filterOptions: MenuItem[]
    handleCheckboxChange: (locationType: LocationTypes) => void;
    handleConfirm: () => void;
    activeFilters: LocationTypes[];

}