import {LocationTypes} from "../add-location/add-location.types";

export interface MenuItemProps {
    item: {
        id: string
        type: LocationTypes
        title: string
        description: string
    }
    showSelectedIcon?: boolean
    onClick: () => void
}