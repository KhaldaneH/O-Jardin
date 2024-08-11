import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img style={{width:'100px'}} src={assets.logo} alt="" />
            <p>Choisissez parmi un menu varié comprenant une gamme délicieuse de plats préparés avec les meilleurs ingrédients et l'expertise culinaire. Nous avons également un magasin, consultez-le.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Liens</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/findus">Contact</Link></li>
                <li style={{fontFamily:'Lucida Handwriting',fontWeight:'bold',color:'white'}}><Link to="/store">Store</Link></li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Contactez Nous</h2>
            <ul>
                <li>+212 661-843714</li>
                <li>info@example.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © <a style={{fontFamily:'Lucida', color:"blue"}} href="https://khaldanehamza.online/">KH Hamza</a> | <a style={{fontFamily:'Lucida', color:"blue"}} href="https://yoursiteagency.online/">yoursiteagency</a>- All Right Reserved.</p>
    </div>
  )
}

export default Footer
