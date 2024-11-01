import {LocationTypes, MenuItem} from "@/components/add-location/add-location.types";

export const MENU_ITEMS: MenuItem[] = [
    {id: "1", type: LocationTypes.RESTAURANT, title: "Restaurant", description: "Add restaurants, cafes and others."},
    {id: "2", type: LocationTypes.TOURISTIC, title: "Touristic Attraction", description: "Any touristic place"},
    {id: "3", type: LocationTypes.PUBLIC_FACILITY, title: "Public Facility", description: "Any public place"},
    {id: "4", type: LocationTypes.EVENT_VENUE, title: "Event Venue", description: "Event locations can be marked here"},
    {id: "5", type: LocationTypes.CUSTOM, title: "Custom Event", description: "Your custom event"},
]