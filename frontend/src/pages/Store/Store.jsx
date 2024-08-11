import React, { useState } from 'react'
import Header from '../../components/Header/Header1/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Store = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>
      
      
    </>
  )
}

export default Store
