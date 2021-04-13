import React from 'react';
import "../styles/SearchBar.css";


const SearchBar = (prop) => {
    return (

        <div className="searchbox">
            <span className="searchtitle">Search</span>
            <input
                id="search"
                className="search-control"
                type="search"
                placeholder="name"
                onChange={prop.handleInputChange}


            />

        </div>
    )
}

export default SearchBar;