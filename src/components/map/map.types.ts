import {Location} from "@/types/location";

export interface MapProps {
    clickedMarker?: Location | undefined
    setClickedMarker: (location?: Location) => void
    isLoading: boolean
    onDeleteLocation: () => void
    onUpdateLocation: (location: Location) => void
    showSuccessModal: boolean
    setShowSuccessModal: (showSuccessModal: boolean) => void
    showEditForm: boolean
    setShowEditForm: (showEditForm: boolean) => void
}