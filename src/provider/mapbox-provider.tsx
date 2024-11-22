import {ReactNode, } from "react";

import {MapboxContext} from "./mapbox-provider.context";
import {useMapSetup} from "@/hooks/use-map-setup";


export const MapboxProvider = ({containerId, children}: { containerId: string, children: ReactNode }) => {
    const {
        mapRef,
        activeFilters,
        isLoading,
        clickedLocation,
        setClickedLocation,
        clickedMarker,
        setClickedMarker,
        locations,
        setActiveFilters,
        addMarker,
        updateMarker,
        deleteMarker
    } = useMapSetup(containerId)

    return (
        <MapboxContext.Provider
            value={{
                clickedMarker,
                setClickedMarker,
                activeFilters,
                setActiveFilters,
                clickedLocation,
                setClickedLocation,
                isLoading,
                mapRef,
                locations,
                addMarker,
                updateMarker,
                deleteMarker
            }}
        >
            {children}
        </MapboxContext.Provider>
    );
};
