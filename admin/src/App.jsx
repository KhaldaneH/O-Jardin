import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import Add2 from './pages/Add/Add2'
import List from './pages/List/List'
import List2 from './pages/List/List2'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App22 = () => {
  return (
    <div className='app'>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/add2" element={<Add2 />} />
          <Route path="/list" element={<List />} />
          <Route path="/list2" element={<List2 />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  )
}

export default App22