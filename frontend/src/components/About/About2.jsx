import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { assets } from '../../assets/assets';

const About2 = () => {
  return (
    <>
      <div style={{marginBottom:'50px'}}></div>
      <div style={{ backgroundColor:'#1B4D3E',borderRadius:' 5px'}} className='about-container'>
        <div className='about-text'>
          <h1 style={{fontFamily:'Lucida Handwriting',fontWeight:'bold',color:'white',marginBottom:'30px'}}>Pourquoi Nous Choisir ?</h1>
          <p style={{color:"white",fontSize:"30px", marginBottom:'30px',fontFamily:'Garamond'}}>
          
 Nous offrons l'endroit idéal pour se détendre et se connecter avec la nature</p>
 <p style={{color:"white",}}>
Profitez d'une évasion naturelle dans nos jardins spacieux, accompagnée d'une ambiance sereine et des chants d'oiseaux. Savourez une cuisine délicieuse et
variée, parfaite pour tous les goûts. <br /> <br />
✔ Evasion Naturelle <br />
✔ Ambiance Sereine <br />
✔ Expérience Culinaire Unique
          </p><br />
          <Link to="/about">
  <button
    style={{
      backgroundColor:"#00853E",
      border: "none",
      color: "white",
      borderRadius: "5px",
      padding: "5px 20px",
      fontSize: "15px",
      cursor: "pointer",
      transition: "background-color 0.3s, transform 0.2s",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      outline: "none"
    }}
    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "darkgreen"}
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = "green"}
    onFocus={(e) => e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0, 128, 0, 0.5)"}
    onBlur={(e) => e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"}
  >
   À propos de nous
  </button>
</Link>
        </div>
        
        <div className='about-media'>
            
          <video className='about-video' controls>
            <source src={assets.vid1} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <img src={assets.about1} alt='Our Story' className='about-image' />
        </div>
      </div>
    </>
  );
};
export default About2;
