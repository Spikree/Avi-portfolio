import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

  const [activeItem, setActiveItem] = useState('Home')

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className='navbar'>
        <div className="logo">
            <h1 onClick={() => handleClick('Home')}>Avi</h1>
        </div>

        <div className="nav-items">
        <ul>
          <li
            className={activeItem === 'Home' ? 'active' : ''}
            onClick={() => handleClick('Home')}
          >
            Home
          </li>
          <li
            className={activeItem === 'About' ? 'active' : ''}
            onClick={() => handleClick('About')}
          >
            About
          </li>
          <li
            className={activeItem === 'Projects' ? 'active' : ''}
            onClick={() => handleClick('Projects')}
          >
            Projects
          </li>
          <li
            className={activeItem === 'Contact' ? 'active' : ''}
            onClick={() => handleClick('Contact')}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar