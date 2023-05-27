import "../Styles/Navbar.css";

import React from 'react'


const Navbar = () => {
  return (

    <nav className='nav-background'>

      <ul>
        <li className='navBar'>
          <a className="nav-link" href="welcome-home">Home</a>
        </li>
        <li className='navBar'>
          <a className="nav-link" href="#company">Company</a>
        </li>
        <li className='navBar' >
          <a className="nav-link" href="#products">Products</a>
        </li>
        <li className='navBar' >
          <a className="nav-link" href="#aboutus">About Us</a>
        </li>
        <li className='navBar' >
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>


    </nav>
  )
}

export default Navbar