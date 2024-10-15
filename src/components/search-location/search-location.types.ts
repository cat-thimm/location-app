import {Location} from "../../types/location";

export interface SearchLocationContainerProps {
    locations: Location[];
}

export interface SearchLocationProps {
    results: Location[];
    handleInput: (ev: Event) => void;
}