import React from "react";

function Search({searchPlants, onSearch}) { 

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={onSearch}
        value={searchPlants}
      />
    </div>
  );
}

export default Search;
