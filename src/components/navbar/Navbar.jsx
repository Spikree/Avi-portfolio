import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const [activeItem, setActiveItem] = useState('Home');

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className='navbar'>
      <div className="logo">
        <h1 onClick={() => handleClick('Home')}>
          <Link className='nav-link' to="/">Avi</Link>
        </h1>
      </div>

      <div className="nav-items">
        <ul>
          <li
            className={activeItem === 'Home' ? 'active' : ''}
            onClick={() => handleClick('Home')}
          >
            <Link className='nav-link' to="/">Home</Link>
          </li>
          <li
            className={activeItem === 'About' ? 'active' : ''}
            onClick={() => handleClick('About')}
          >
            <Link className='nav-link' to="/about">About</Link>
          </li>
          <li
            className={activeItem === 'Projects' ? 'active' : ''}
            onClick={() => handleClick('Projects')}
          >
            <Link className='nav-link' to="/projects">Projects</Link>
          </li>
          <li
            className={activeItem === 'Contact' ? 'active' : ''}
            onClick={() => handleClick('Contact')}
          >
            <Link className='nav-link' to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
