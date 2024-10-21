import {LocationTypes} from "../components/add-location/add-location.types";
import {Location} from "../types/location";

export interface MapboxContextType {
    clickedMarker?: Location;
    setClickedMarker: (marker: Location | undefined) => void;
    activeFilters: LocationTypes[];
    setActiveFilters: (filters: LocationTypes[]) => void;
    clickedLocation: {
        latitude: number,
        longitude: number,
        address: string;
    } | null;
    setClickedLocation: (location: { latitude: number; longitude: number; address: string } | null) => void;
    isLoading: boolean;
    mapRef: React.MutableRefObject<mapboxgl.Map | null>;
    refetch: boolean
    setRefetch: (refetch: boolean) => void
    locations: Location[]
}
