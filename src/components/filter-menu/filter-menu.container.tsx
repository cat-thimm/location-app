import {useState} from "react";

import {MENU_ITEMS} from "@/data/location-menu";

import {LocationTypes} from "../add-location/add-location.types";

import {FilterMenu} from "./filter-menu.markup";
import {FilterMenuContainerProps} from "./filter-menu.types";

export const FilterMenuContainer = ({onDismiss, showMenu, onApplyFilter, activeFilters}: FilterMenuContainerProps) => {
    // Track the selected filter options
    const [selectedFilters, setSelectedFilters] = useState<LocationTypes[]>([...activeFilters]);

    const handleCheckboxChange = (locationType: LocationTypes) => {
        setSelectedFilters((prevFilters) =>
            prevFilters.includes(locationType)
                ? prevFilters.filter((filter) => filter !== locationType) // Remove if already selected
                : [...prevFilters, locationType] // Add if not selected
        );
    };

    const handleConfirm = () => {
        onApplyFilter(selectedFilters); // Apply filters when confirmed
        onDismiss(); // Close the modal
    };


    return <FilterMenu onDismiss={onDismiss}
                       showMenu={showMenu}
                       filterOptions={MENU_ITEMS}
                       handleCheckboxChange={handleCheckboxChange}
                       handleConfirm={handleConfirm}
                       activeFilters={selectedFilters}
    />
}