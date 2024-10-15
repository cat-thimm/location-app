import {SearchLocation} from "./search-location.markup";
import {SearchLocationContainerProps} from "./search-location.types";
import {useState} from "react";

export const SearchLocationContainer = ({locations}: SearchLocationContainerProps)=>{
    let [results, setResults] = useState([...locations]);

    const handleInput = (ev: Event) => {
        let query = '';
        const target = ev.target as HTMLIonSearchbarElement;
        if (target) query = target.value!.toLowerCase();

        setResults(locations.filter((location) => location.name.toLowerCase().indexOf(query) > -1));
    };

    return <SearchLocation results={results} handleInput={handleInput} />
}