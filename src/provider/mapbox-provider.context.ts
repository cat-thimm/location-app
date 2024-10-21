import {createContext} from "react";

import {MapboxContextType} from "./mapbox-provider.types";

export const MapboxContext = createContext<MapboxContextType | undefined>(undefined);
