import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { assets } from '../../assets/assets';

const About2 = () => {
  return (
    <>

<div style={{marginBottom:"60px"}} className="hero-container">
      <div className="hero-text">
        <h1>Délices pour tous les goûts, fraîcheur à chaque bouchée.</h1>
      </div>
      <div className="hero-subtext">
        <p>
          Au “Cafe O Jardin”, nous vous proposons une variété de plats délicieux et de boissons rafraîchissantes qui satisfont tous les goûts.
        </p>
        <Link to="/menu"><button className="hero-button">Voir le menu</button></Link>
      </div>
    </div>
      
      <div style={{marginBottom:"90px"}} className='about-container'>
        <div className='about-text'>
          <h1 style={{  color: 'green', marginBottom: '20px' }}>
            À propos de nous
          </h1>
          <p style={{ color: "gray" }}>
          “Cafe O Jardin” est situé dans un emplacement stratégique à l’extérieur de la ville de Taroudant, offrant à nos visiteurs une expérience unique loin du bruit de la ville. Nous vous proposons un environnement paisible où vous pouvez profiter de merveilleuses séances dans nos vastes jardins remplis de diverses plantes. Ici, vous pouvez savourer des repas délicieux et des boissons rafraîchissantes tout en écoutant le chant des oiseaux dans nos installations dédiées à la nature.
          </p>
        </div>
         
        <div className='about-media'>
          <div style={{ position: 'relative', width: '400px', paddingTop: '54.0270%', paddingBottom: '0', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
            <iframe
              loading="lazy"
              style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: '0',  }}
              src="https://www.canva.com/design/DAGNAhAttlM/AU-eOftWies4kKXQ5r_9iw/watch?embed"
              allowFullScreen
              allow="fullscreen"
            ></iframe>
          </div>
        </div>
      </div>

     

      <div style={{ marginBottom: '90px' }}></div>
      <div style={{ backgroundColor: '#0f1f18', borderRadius: '5px' }} className='about-container'>
        <div className='about-text'>
          <h1 style={{ color: 'white', marginBottom: '30px' }}>
            Pourquoi Nous Choisir ?
          </h1>
          <p style={{ color: "white", fontSize: "30px", marginBottom: '30px', fontFamily: 'Garamond' }}>
            Nous offrons l'endroit idéal pour se détendre et se connecter avec la nature
          </p>
          <p style={{ color: "white" }}>
            Profitez d'une évasion naturelle dans nos jardins spacieux, accompagnée d'une ambiance sereine et des chants d'oiseaux.
            Savourez une cuisine délicieuse et variée, parfaite pour tous les goûts. <br /> <br />
            ✔ Evasion Naturelle <br />
            ✔ Ambiance Sereine <br />
            ✔ Expérience Culinaire Unique
          </p><br />
          <Link to="/about">
            <button
              style={{
                backgroundColor: "#00853E",
                border: "none",
                color: "white",
                borderRadius: "50px",
                padding: "5px 20px",
                fontSize: "15px",
                cursor: "pointer",
                transition: "background-color 0.3s, transform 0.2s",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                outline: "none"
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "darkgreen"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#00853E"}
              onFocus={(e) => e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0, 128, 0, 0.5)"}
              onBlur={(e) => e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"}
            >
              À propos de nous
            </button>
          </Link>
        </div>

        <div className='about-media'>
          <video className='about-video'  controls>
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
