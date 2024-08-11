import React, { useContext } from 'react';
import './Menu.css';
import { StoreContext } from '../../Context/StoreContext';

const Menu = ({ category, setCategory }) => {
  const {menu_list} = useContext(StoreContext);
  
  // List of categories to include
  const includedCategories = ["café", "lait", "thé", "jus", "détox", "plats", "entrée", "petit déjeuner"];

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1 style={{color:"#0f1f18"}}>Découvrez notre menu</h1>
      <p className='explore-menu-text'>Faites votre choix parmi un menu varié proposant une gamme de plats délicieux. Notre mission est de satisfaire vos envies et d'améliorer votre expérience culinaire, un repas délicieux à la fois.</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          const normalizedCategory = item.menu_name.trim().toLowerCase();
          
          // Show only specific categories
          if (includedCategories.includes(normalizedCategory)) {
            return (
              <div 
                onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
                key={index} 
                className='explore-menu-list-item'
              >
                <img src={item.menu_image} className={category === item.menu_name ? "active" : ""} alt="" />
                <p>{item.menu_name}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
      <hr />
    </div>
  );
};

export default Menu;
