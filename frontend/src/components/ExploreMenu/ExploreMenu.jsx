import React, { useContext } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';

const ExploreMenu = ({category, setCategory}) => {
  const {menu_list} = useContext(StoreContext);

  // List of categories to exclude
  const excludedCategories = ["café", "lait", "thé", "jus", "détox", "plats", "entrée", "petit déjeuner"];

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Découvrez notre boutique</h1>
      <p className='explore-menu-text'>Choisissez parmi une liste diversifiée de produits naturels</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          const normalizedCategory = item.menu_name.trim().toLowerCase();
          
          // Exclude specific categories
          if (!excludedCategories.includes(normalizedCategory)) {
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

export default ExploreMenu;
