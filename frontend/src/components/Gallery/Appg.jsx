import React from 'react';
import Gallery from './Gallery';
import { assets } from '../../assets/assets';

const images = [
  { src: assets.about2, alt: 'Image 1' },
  { src: assets.about3, alt: 'Image 2' },
  { src: assets.about4, alt: 'Image 3' },
  { src: assets.about5, alt: 'Image 3' },
  { src: assets.about6, alt: 'Image 3' },
  { src: assets.about7, alt: 'Image 3' },
  { src: assets.about8, alt: 'Image 3' },
  { src: assets.about11, alt: 'Image 4' },
  { src: assets.about1, alt: 'Image 5' },
  { src: assets.about111, alt: 'Image 6' },
  // Add more images as needed
];

const App = () => {
  return (
    <div style={{marginBottom:'70px' , marginTop:"50px"}}>
      <h1 style={{ textAlign: 'center', padding: '20px', fontFamily:'Lucida Handwriting',fontWeight:'bold',color:'green',marginBottom:'20' }} >Gallery</h1>
      <Gallery images={images} autoPlay={true} interval={3000} />
    </div>
  );
};

export default App;
