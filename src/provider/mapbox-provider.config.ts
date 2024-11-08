import {LocationTypes} from "@/components/add-location/add-location.types";
import {Location} from "@/types/location";

export const getLocationSource = (filteredLocations: Location[]): any => {
    return {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': filteredLocations.map(location => ({
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [location.longitude, location.latitude],
                },
                'properties': {
                    'id': location.id,
                    'type': location.type,
                    'name': location.name,
                    'description': location.description,
                    'address': location.address,
                    'visitDate': location.visitDate,
                }
            }))
        },
        'cluster': true,
        'clusterRadius': 30,
        clusterProperties: {
            has_restaurant: ["any", ["==", ["get", "type"], LocationTypes.RESTAURANT], false],
            has_touristic: ["any", ["==", ["get", "type"], LocationTypes.TOURISTIC], false],
            has_public_facility: ["any", ["==", ["get", "type"], LocationTypes.PUBLIC_FACILITY], false],
            has_event: ["any", ["==", ["get", "type"], LocationTypes.EVENT_VENUE], false],
            has_custom: ["any", ["==", ["get", "type"], LocationTypes.CUSTOM], false],
        },
    }
}

export const clustersBackgroundConfig: any = {
    id: "clusters-background",
    type: "circle",
    source: "locations",
    filter: ["has", "point_count"],
    paint: {
        "circle-color": [
            "case",
            ["get", "has_restaurant"], "#7BFFAD",
            ["get", "has_touristic"], "#FFE18D",
            ["get", "has_event"], "#FFA4C4",
            ["get", "has_public_facility"], "#B1D7FF",
            ["get", "has_custom"], "#FF9999",
            "#51bbd6" // Default background color
        ],
        "circle-radius": 20,
    }
}

export const clustersSymbolConfig: any = {
    id: 'clusters',
    type: 'symbol',
    source: 'locations',
    filter: ['has', 'point_count'],
    layout: {
        'icon-image': [
            'case',
            ['get', 'has_restaurant'], LocationTypes.RESTAURANT,
            ['get', 'has_touristic'], LocationTypes.TOURISTIC,
            ['get', 'has_public_facility'], LocationTypes.PUBLIC_FACILITY,
            ['get', 'has_event'], LocationTypes.EVENT_VENUE,
            ['get', 'has_custom'], LocationTypes.CUSTOM,
            LocationTypes.PUBLIC_FACILITY // Default icon
        ],
        'icon-size': 0.25,
        'icon-allow-overlap': true,
    },
}

export const clustersCountBackgroundConfig: any = {
    id: 'clusters-count-bg',
    type: 'circle',
    source: 'locations',
    filter: ['has', 'point_count'],
    paint: {
        'circle-translate': [15, -15],
        'circle-color': '#E60000',
        'circle-radius': 8,
    },
}

export const clusterCountConfig: any = {
    id: 'cluster-count',
    type: 'symbol',
    source: 'locations',
    filter: ['has', 'point_count'],
    paint: {
        'text-color': '#FFFFFF',
        'text-translate': [15, -15],
    },
    layout: {
        'text-field': '{point_count_abbreviated}',
        'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
        'text-size': 12,
        'text-allow-overlap': true,
    },
}

