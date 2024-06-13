import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import search from '../assets/search.png';
import set from '../assets/set.png';
import '../../src/Navbar.css';

const Navbar = ({ theme, setTheme }) => {
  const toggleMode = () => {
    setTheme(theme === 'light' ? 'black' : 'white');
  };

  const linkStyle = {
    color: theme === 'black' ? 'white' : 'black',
    textDecoration: 'none'
  };

  return (
    <div className='navbar-nav' style={{ backgroundColor: theme, color: theme === 'black' ? 'white' : 'black' }}>
      <img src={Logo} alt="Logo" className='logo' />
      <ul>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/courses" style={linkStyle}>Courses</Link></li>
        <li><Link to="/subscription" style={linkStyle}>Subscription</Link></li>
      </ul>
      <div className='search-box'>
        <input type="text" placeholder='Search' />
        <img src={search} alt="Search Icon"/>
      </div>
      <img onClick={toggleMode} src={set} alt="Toggle Theme Icon" className='toggle-icon' />
    </div>
  );
};

export default Navbar;
