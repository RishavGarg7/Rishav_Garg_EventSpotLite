import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ onSearchUpdate }) => {
  // State to hold the current value of the search input
  const [query, setQuery] = useState('');

  // Handle change in search input and call onSearchUpdate with the new query
  const handleQueryChange = (event) => {
    const updatedQuery = event.target.value;
    setQuery(updatedQuery);
    onSearchUpdate(updatedQuery); // Notify parent component of the updated query
  };

  return (
    <header className="header-bar">
      <div className="header-content">
        <h1 className="logo-title">EventSpot Lite</h1> {/* Logo/title of the application */}
        <div className="search-section">
          <form>
            <input
              type="text"
              placeholder="Search events by name or location..."
              value={query}
              onChange={handleQueryChange}
            />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
