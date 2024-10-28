import React, { useState } from "react"; // Import React and useState hook
import Navbar from "./components/Navbar"; // Import Navbar component
import EventList from "./components/EventList"; // Import EventList component
import "./styles/App.css"; // Import CSS for styling

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the current search term

  // Function to update the search term based on user input
  const onSearchUpdate = (term) => {
    setSearchQuery(term); // Update state with the new search term
  };

  return (
    <div className="App">
      {" "}
      {/* Main application container */}
      <Navbar onSearchUpdate={onSearchUpdate} />{" "}
      {/* Render Navbar and pass the search handler */}
      <EventList searchTerm={searchQuery} />{" "}
      {/* Render EventList and pass the current search term */}
    </div>
  );
}

export default App; // Export the App component
