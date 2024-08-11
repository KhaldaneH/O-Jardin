import React from 'react';
import './About.css';
import Header2 from '../Header/Header2/Header2';
import { assets } from '../../assets/assets';

const About = () => {
  return (
    <>
      <Header2/>
      <div className='about-container'>
        <div className='about-text'>
          <h1 style={{fontFamily:'Lucida Handwriting',fontWeight:'bold',color:'green',marginBottom:'20PX'}}>À propos de nous</h1>
          <p style={{color:"gray"}}>
          Découvrez le havre de paix et de beauté qu’est “Cafe O Jardin”, situé au cœur de Taroudant, loin du bruit de la ville et de l’agitation de la vie quotidienne. Notre café et restaurant se distingue par de magnifiques et vastes jardins abritant une grande variété de plantes, en faisant l’endroit idéal pour se détendre et profiter de la nature. Profitez d’une atmosphère sereine accompagnée des chants mélodieux des oiseaux qui résonnent dans nos installations dédiées à la nature.
          </p>
        </div>
        <div className='about-media'>
          <video className='about-video' controls>
            <source src={assets.vid1} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <img src={assets.about1} alt='Our Story' className='about-image' />
        </div>
      </div>
      <div style={{ backgroundColor:'#1B4D3E',borderRadius:' 1%', marginBottom:"50px"}} className='about-section'>
          <div className='about-text'>
            <h2 style={{fontFamily: 'Lucida Handwriting', fontWeight: 'bold', color: 'white', marginBottom: '20px'}}>Notre histoire</h2>
            <p style={{color:"white"}}>
            “Cafe O Jardin” est situé dans un emplacement stratégique à l’extérieur de la ville de Taroudant, offrant à nos visiteurs une expérience unique loin du bruit de la ville. Nous vous proposons un environnement paisible où vous pouvez profiter de merveilleuses séances dans nos vastes jardins remplis de diverses plantes. Ici, vous pouvez savourer des repas délicieux et des boissons rafraîchissantes tout en écoutant le chant des oiseaux dans nos installations dédiées à la nature.            </p>
          </div>
          <div className='about-media'>
            <img src={assets.about1} alt='Our Story' className='about-image' />
            <img src={assets.about111} alt='Our Story' className='about-image' />
          </div>
        </div>
    </>
  );
};

export default About;
