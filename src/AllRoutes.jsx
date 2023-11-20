import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Auth from './Components/Auth/Auth'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/Auth' element={<Auth/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
