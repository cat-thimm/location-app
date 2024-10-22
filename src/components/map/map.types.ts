import {Location} from "../../types/location";

export interface MapProps {
    clickedMarker?: Location
    setClickedMarker: (location?: Location) => void
    isLoading: boolean
    onDeleteLocation: () => void
    showSuccessModal: boolean
    setShowSuccessModal: (showSuccessModal: boolean) => void
}