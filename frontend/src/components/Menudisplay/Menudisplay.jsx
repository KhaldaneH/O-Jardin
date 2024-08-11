import React, { useContext } from 'react';
import './Menudisplay.css';
import FoodItem2 from '../FoodItem/FoodItem2';
import { StoreContext } from '../../Context/StoreContext';

const Menudisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // List of categories to include
  const includedCategories = ["café", "lait", "thé", "jus","détox", "plats", "entrée", "petit déjeuner"];

  return (
    <div className='food-display' id='food-display'>
      <h2>Menu</h2>
      <div className='food-display-list'>
        {food_list.map((item) => {
          const normalizedCategory = item.category.trim().toLowerCase();

          // Show only if the category is in the includedCategories list
          if ((category === "All" || category === item.category) && includedCategories.includes(normalizedCategory)) {
            return (
              <FoodItem2 
                key={item._id} 
                image={item.image} 
                name={item.name} 
                desc={item.description} 
                price={item.price} 
                id={item._id} 
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Menudisplay;
