import React, { useState } from 'react'
import Header from '../../components/Header/Header1/Header'
import Menu from '../../components/Menufood/Menu'
import { Link } from 'react-router-dom'
import AppDownload from '../../components/AppDownload/AppDownload'
import About2 from '../../components/About/About2'
import FindUs2 from '../../components/Findus/Findus2'
import App from '../../components/Gallery/Appg'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <About2/>
      <div style={{marginBottom:"50px"}}></div>
      <Menu setCategory={setCategory} category={category}/>
      <button  style={{
      backgroundColor:"#00853E",
      border: "none",
      color: "white",
      borderRadius: "50px",
      padding: "5px 20px",
      fontSize: "20px",
      cursor: "pointer",
      transition: "background-color 0.3s, transform 0.2s",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      outline: "none"
    }}
    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "darkgreen"}
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = "green"}
    onFocus={(e) => e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0, 128, 0, 0.5)"}
    onBlur={(e) => e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"}><Link to="/menu">voir le menu</Link></button>
      <App/>
      <FindUs2/>
    </>
  )
}

export default Home
