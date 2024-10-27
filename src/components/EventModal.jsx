import React, { useState } from 'react';
import '../styles/EventModal.css';

const EventModal = ({ event, onClose }) => {
  // State to track if the modal is in the process of closing (for animation)
  const [isAnimatingClose, setIsAnimatingClose] = useState(false);

  // Function to handle closing animation and trigger onClose after animation ends
  const initiateClose = () => {
    setIsAnimatingClose(true); // Start close animation
    setTimeout(onClose, 300); // Delay onClose to match animation duration
  };

  return (
    <div 
      className={`modal-overlay ${isAnimatingClose ? 'closing' : ''}`} 
      onClick={initiateClose} // Close modal when clicking outside content
    >
      {/* Modal content container */}
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} // Prevents close when clicking inside modal
      >
        {/* Close button */}
        <button className="close-button" onClick={initiateClose}>
          &times;
        </button>

        {/* Event image */}
        <img 
          src={event.image} 
          alt={event.name} 
          className="modal-image" 
        />

        {/* Event details */}
        <h2>{event.name}</h2>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Description:</strong> {event.description}</p>
      </div>
    </div>
  );
};

export default EventModal;
