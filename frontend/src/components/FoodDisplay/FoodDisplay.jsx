import React, { useContext } from 'react';
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../Context/StoreContext';

const FoodDisplay = ({category}) => {
  const {food_list} = useContext(StoreContext);

  // List of categories to exclude
  const excludedCategories = ["café", "lait", "thé", "jus","détox", "plats", "entrée", "petit déjeuner"];

  return (
    <div className='food-display' id='food-display'>
      <h2>Notre produit</h2>
      <div className='food-display-list'>
        {food_list.map((item) => {
          console.log("Item category:", item.category); // Debug: Log the category

          if (
            (category === "All" || category === item.category) && 
            !excludedCategories.includes(item.category)
          ) {
            return (
              <FoodItem 
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

export default FoodDisplay;
