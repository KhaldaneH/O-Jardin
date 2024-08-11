import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='navbar'>
      <Link to='/' className='navbar-logo'><img style={{width:'100px'}} src={assets.logo2} alt="" />
      </Link>
      <div className={`navbar-menu-container ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className='navbar-menu'>
          <li><Link to="/" onClick={() => { setMenu("home"); setIsMobileMenuOpen(false); }} className={`${menu === "home" ? "active" : ""}`}>Home</Link></li>
          <li><Link to='/about' onClick={() => { setMenu("about"); setIsMobileMenuOpen(false); }} className={`${menu === "about" ? "active" : ""}`}>About</Link></li>
          <li><Link to='/menu' onClick={() => { setMenu("menu"); setIsMobileMenuOpen(false); }} className={`${menu === "menu" ? "active" : ""}`}>Menu</Link></li>
          <li><Link to='/findus' onClick={() => { setMenu("contact"); setIsMobileMenuOpen(false); }} className={`${menu === "contact" ? "active" : ""}`}>Contact</Link></li>
          <li><Link to='/store' style={{fontFamily:'Lucida Handwriting',fontWeight:'bold',color:'green'}} className='navbar-store-link ' onClick={() => setIsMobileMenuOpen(false)}>Store</Link></li>
          
        </ul>
      </div>
      <div className="navbar-right">
      <li className="mobile-only">
            {!token ? (
              <button onClick={() => { setShowLogin(true); setIsMobileMenuOpen(false); }}>S'inscrire</button>
            ) : (
              <div className='navbar-profile'>
                <img src={assets.profile_icon} alt="Profile" />
                <ul className='navbar-profile-dropdown'>
                  <li onClick={() => { navigate('/myorders'); setIsMobileMenuOpen(false); }}> <img src={assets.bag_icon} alt="Orders" /> <p>Ordres</p></li>
                  <hr />
                  <li onClick={logout}> <img src={assets.logout_icon} alt="Logout" /> <p>Déconnexion</p></li>
                </ul>
              </div>
            )}
          </li>
        
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="Cart" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        <div className="desktop-only">
          {!token ? (
            <button onClick={() => setShowLogin(true)}>sign in</button>
          ) : (
            <div className='navbar-profile'>
              <img src={assets.profile_icon} alt="Profile" />
              <ul className='navbar-profile-dropdown'>
                <li onClick={() => navigate('/myorders')}> <img src={assets.bag_icon} alt="Orders" /> <p>Orders</p></li>
                <hr />
                <li onClick={logout}> <img src={assets.logout_icon} alt="Logout" /> <p>Logout</p></li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div style={{width:'20px'}} className="navbar-menu-toggle" onClick={toggleMobileMenu}>
      &#9776;
      </div>
    </div>
  );
};

export default Navbar;
