import mapboxgl from "mapbox-gl";

export interface MapContainerProps {
    clickedLocation: { latitude: number, longitude: number, address: string } | null
    setClickedLocation: (location: { latitude: number, longitude: number, address: string } | null) => void
    isLoading: boolean
    mapRef:  React.MutableRefObject<mapboxgl.Map | null>
}