import React from 'react';
import './SearchBar.css'

function SearchBar(){
    return (
        <div className="input-search">
            <input type="search" placeholder="Images search" className="input" />
        </div>
    )
}

export default SearchBar;