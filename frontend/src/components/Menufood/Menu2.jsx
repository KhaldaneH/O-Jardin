import React, { useState } from 'react'
import Header3 from '../Header/Header3/Header3'
import Menu from './Menu'
import Menudisplay from '../Menudisplay/Menudisplay'

const Menu2 = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
    <div style={{marginBottom:"50px"}}>
      <Header3/>
      <Menu setCategory={setCategory} category={category}/>
      <Menudisplay category={category}/>
      </div>
    </>
  )
}

export default Menu2