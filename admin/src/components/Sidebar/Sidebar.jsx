import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>Ajouter un produit</p>
        </NavLink>
        <NavLink to='/add2' className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>Ajouter un aliment</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Liste des aliments</p>
        </NavLink>
        <NavLink to='/list2' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Liste des produit</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Commandes</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
