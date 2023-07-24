import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import react, { useState } from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-items">
      {/* <FontAwesomeIcon icon= {faMagnifyingGlass} className="search-icon" /> */}
      <input
        className="search-bar"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="filter..."
      />
    </div>
  );
}

export default SearchBar;
