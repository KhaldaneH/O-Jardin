import React from 'react';
import './Findus.css';
import { assets } from '../../assets/assets';
import Header from '../Header/Header1/Header';

const FindUs = () => {
  return (
    <>
    <Header/>
    <div style={{marginBottom:'50px'}} className="find-us-container">
      <div className="contact-info">
        <h2>Contactez nous</h2>
        <p><strong>Address:</strong> Ô Jardin Café, Boutariyalt 83000 </p>
        <p><strong>Phone:</strong> +212 661-843714 </p>
        <p><strong>Email:</strong> info@example.com </p>
      </div>
      <div className="map-container">
        <div className="map">
          <h2>Find Us on the Map</h2>
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13756.38204558894!2d-8.8839535!3d30.4617327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb1737a1ee7b413%3A0xbd8adb4d5f5cc49d!2zw5QgSmFyZGluIENhZsOp!5e0!3m2!1sen!2sma!4v1723134228278!5m2!1sen!2sma"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="map-image">
          <img src={assets.about111} alt="Location"/>
        </div>
      </div>
    </div>
    </>
  );
};

export default FindUs;