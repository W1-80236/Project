import React from 'react';
import '../restaurant.css'
import logo from '../images/splashimg.jpg'; // Import your restaurant logo

const SplashPage = () => {
  return (
    <div className="splash-page">
      <img src={logo} alt="Restaurant Logo" />
    </div>
  );
}
export default SplashPage;
