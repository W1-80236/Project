import React from 'react';
import './SunbeamHeader.css'; // Import your CSS file for styling

const SunbeamHeader = () => {
  return (
    <header className="sunbeam-header">
      <div className="logo-container">
        {/* Your Sunbeam restaurant logo */}
        <img src="/path/to/your/logo.png" alt="Sunbeam Restaurant Logo" />
      </div>
      <div className="info-container">
        <div className="restaurant-name">Sunbeam Restaurant</div>
        <div className="dish-info">
          <span className="dish-name">Your Dish Name</span>
          <div className="veg-non-veg-box">Veg</div> {/* Change to Non-Veg if required */}
        </div>
      </div>
    </header>
  );
};

export default SunbeamHeader;
