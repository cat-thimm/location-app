import {useContext} from "react";

import {MapboxContext} from "../provider/mapbox-provider.context";

/**
 * Hook to use the Mapbox context in components.
 */
export const useMapbox = () => {
    const context = useContext(MapboxContext);
    if (context === undefined) {
        throw new Error('useMapbox must be used within a MapboxProvider');
    }
    return context;
};