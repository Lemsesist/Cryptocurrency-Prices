import React from "react";

export const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search cryptocurrency..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};
