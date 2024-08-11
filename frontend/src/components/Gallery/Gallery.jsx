import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = ({ images, autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const switcher = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(switcher);
  }, [autoPlay, interval, images.length]);

  return (
    <div className="gallery-row">
      {images.map((image, index) => (
        <div
          key={index}
          className={`gallery-item ${currentIndex === index ? 'active' : ''}`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          <img src={image.src} alt={image.alt} className="gallery-image" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
