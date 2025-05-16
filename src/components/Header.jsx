// src/components/Header.jsx
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header d-flex justify-content-between align-items-center px-4 py-3">
      <div className="logo">Siddharth Ohal</div>
      <nav>
        <ul className="nav-list d-flex gap-4 mb-0">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About Me</Link></li>
          <li><Link to="/projects" className="nav-link">Projects</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
