import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';
import '../styles/NavBar.css';

const NavBar = () => {
  const blueColor = {
    color: 'blue',
  };

  return (
    <div className="container">
      <nav className="nav-bar">
        <span className="logo">Math Magicians</span>
        <ul className="nav-menu">
          <li><Link to="/" style={blueColor}>Home</Link></li>
          <li><Link to="/calculator" style={blueColor}>Calculator</Link></li>
          <li><Link to="/quote" style={blueColor}>Quote</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
};

export default NavBar;
