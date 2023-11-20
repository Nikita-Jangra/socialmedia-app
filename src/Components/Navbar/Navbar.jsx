import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav-bar'>
        <div className='navbar-container-1'>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/Account' className='nav-link'>Account</Link>
            <Link to='/Auth' className='nav-link'>Log in</Link> 
        </div>
      </div>
  )
}

export default Navbar
