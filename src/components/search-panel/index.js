import React, { useState } from "react";
import "./search-panel.css";

const SearchPanel = ({onUpdateSearch}) => {
    const [term, setTerm] = useState('');
    const onValueChange = (e) => {
        const term = e.target.value;
        setTerm(term);
        onUpdateSearch(term);
        // onUpdateSearch.onUpdateSearch(term);
    }
    return(<input className="form-control search-input" type="text" onChange={onValueChange} value={term} placeholder="Поиск по записям"/>)
}

export default SearchPanel;