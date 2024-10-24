import {Location} from "../../types/location";

import {LocationTypes} from "../add-location/add-location.types";

export interface LocationEditorContainerProps {
    onSaveLocation: (location: Location) => void;
    onFormDismiss: () => void;
    location: {
        latitude: number;
        longitude: number;
        address: string;
    } | Location;
}

export interface LocationEditorProps {
    location: {
        latitude: number;
        longitude: number;
        address: string;
    } | Location;
    showDescriptionForm: boolean;
    setShowDescriptionForm: (showDescriptionForm: boolean) => void;
    selectedType: LocationTypes | null;
    setSelectedType: (type: LocationTypes | null) => void;
    locationName: string;
    onChangeLocationName: (event: any) => void;
    locationComment: string;
    onChangeLocationComment: (event: any) => void;
    resetForms: () => void;
    onSaveForm: () => void;
}