import React, { useState } from 'react';
import "./search.css"

const SearchComponent = () => {
  // Define state to hold the search query
  const [query, setQuery] = useState('');

  // Event handler for input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Event handler for form submission
  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here, e.g., make an API call
    console.log('Searching for:', query);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
};