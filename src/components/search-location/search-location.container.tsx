import {useState} from "react";

import {Location} from "../../types/location";

import {SearchLocation} from "./search-location.markup";
import {SearchLocationContainerProps} from "./search-location.types";

export const SearchLocationContainer = ({locations, mapRef}: SearchLocationContainerProps) => {
    let [results, setResults] = useState<Location[]>([]);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false); // Manage popover state


    const handleInput = (ev: Event) => {
        let query = '';
        const target = ev.target as HTMLIonSearchbarElement;
        if (target) query = target.value!.toLowerCase();

        if (query === "") {
            setResults([])
            setIsPopoverOpen(false);
            return
        }
        setResults(locations.filter((location) => location.name.toLowerCase().indexOf(query) > -1));
        setIsPopoverOpen(true);
    };

    const flyToLocation = (location: Location) => {
        if (mapRef.current) {
            mapRef.current.flyTo({
                center: [location.longitude, location.latitude],
            })

            setIsPopoverOpen(false);
        }
    }

    return <SearchLocation results={results}
                           handleInput={handleInput}
                           isPopoverOpen={isPopoverOpen}
                           setIsPopoverOpen={setIsPopoverOpen}
                           flyToLocation={flyToLocation}
    />
}