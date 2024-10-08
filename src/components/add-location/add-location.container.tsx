import {AddLocation} from "./add-location.markup";
import {AddLocationContainerProps, LocationTypes, MenuItem} from "./add-location.types";

const MENU_ITEMS: MenuItem[] = [
    {id: "1", type: LocationTypes.RESTAURANT, title: "Restaurant", description: "XZ"},
    {id: "2", type: LocationTypes.TOURISTIC, title: "Touristic Attraction", description: "XZ"},
    {id: "3", type: LocationTypes.PUBLIC_FACILITY, title: "Public Facility", description: "XZ"},
    {id: "4", type: LocationTypes.EVENT_VENUE, title: "Event Venue", description: "XZ"},
    {id: "5", type: LocationTypes.CUSTOM, title: "Custom Event", description: "XZ"},
]

export const AddLocationContainer = ({location}: AddLocationContainerProps) => {
    

    return <AddLocation menuItems={MENU_ITEMS} location={location}/>
}