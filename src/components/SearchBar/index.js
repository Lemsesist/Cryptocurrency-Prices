import React from 'react';
import './index.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar-container" title="The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price">
      <input
        type="text"
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
