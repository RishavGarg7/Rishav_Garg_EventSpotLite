import React, { useState, useEffect } from "react";
import eventsData from "../mockData"; // Import mock data
import EventModal from "./EventModal"; // Import modal component
import "../styles/EventList.css"; // Import styles

const EventList = ({ searchTerm }) => {
  // State to track the currently selected event for modal display
  const [activeEvent, setActiveEvent] = useState(null);

  // State to store the filtered list of events
  const [displayedEvents, setDisplayedEvents] = useState(eventsData);

  // Filter events based on the search term whenever it changes
  useEffect(() => {
    const filtered = eventsData.filter(
      (event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedEvents(filtered); // Update displayed events with the filtered list
  }, [searchTerm]);

  // Function to open the modal for a selected event
  const showEventDetails = (event) => {
    setActiveEvent(event);
  };

  // Function to close the modal
  const hideEventDetails = () => {
    setActiveEvent(null);
  };

  return (
    <div className="event-list-container">
      <div className="events-grid">
        {displayedEvents.map((event) => (
          <div
            className="event-card"
            key={event.id}
            onClick={() => showEventDetails(event)} // Open modal with event details
          >
            <img
              src={event.image}
              alt={event.name}
              className="event-image"
              loading="lazy" // Optimize image loading
            />
            <div className="event-info">
              <h3>{event.name}</h3>
              <p>{event.date}</p>
              <p>{event.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Conditionally render the EventModal if an event is selected */}
      {activeEvent && (
        <EventModal event={activeEvent} onClose={hideEventDetails} />
      )}
    </div>
  );
};

export default EventList;
