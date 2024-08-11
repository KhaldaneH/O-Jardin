import React, { useState } from 'react'
import Header5 from '../../components/Header/Header5/Header5'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Store = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header5/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>
      
      
    </>
  )
}

export default Store
