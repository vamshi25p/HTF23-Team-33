import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Hero.css';
import Hero_image from './Hero_image.png';

function Hero() {
  return (
    <>
      <div className="hero">
        <img src={Hero_image} alt="DSA Banner" />
      </div>
      <div className="hero-btn">
        {/* Add a Link to the next page */}
        <Link to="/nextpage">
          <button className="btn">Get Started</button>
        </Link>
      </div>
      <div></div>
    </>
  );
}

export default Hero;
