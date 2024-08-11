import React from 'react';
import './Findus.css';
import { assets } from '../../assets/assets';

const FindUs2 = () => {
  return (
    <>
    <div style={{scrollMarginBottom:"90px"}} className="quote-container">
      <div className="quote-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
</svg>      </div>
      <p className="quote-text">
        Promenez-vous dans les allées du jardin et découvrez la beauté de la nature qui vous entoure
      </p>
    </div>

    <div style={{marginBottom:'50px'}} className="find-us-container">
      <div className="contact-info">
        <h2>Contactez nous</h2>
        <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Email:</strong> info@example.com</p>
      </div>
      <div className="map-container">
        <div className="map">
          <h2>Trouvez-nous sur google map</h2>
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13756.38204558894!2d-8.8839535!3d30.4617327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb1737a1ee7b413%3A0xbd8adb4d5f5cc49d!2zw5QgSmFyZGluIENhZsOp!5e0!3m2!1sen!2sma!4v1723134228278!5m2!1sen!2sma"
            width="100%"
            height="300"
            style={{ border: 0}}
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

export default FindUs2;
