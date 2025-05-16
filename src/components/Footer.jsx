import React from 'react';
import { useLocation } from 'react-router-dom'; // 1. Import useLocation
import './Footer.css';

const Footer = () => {
  const location = useLocation(); // 2. Get current path

  const hideIcons = location.pathname === '/contact'; // 3. Check if current path is '/contact'

  return (
    <footer className="footer d-flex justify-content-between align-items-center px-4 py-3">
      <div className="footer-left">
        © {new Date().getFullYear()} Siddharth Ohal. All rights reserved.
      </div>

      {!hideIcons && ( // 4. Conditionally render icons
        <div className="footer-right d-flex gap-3">
          <a href="https://github.com/7even-7even" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github footer-icon"></i>
          </a>
          <a href="https://www.linkedin.com/in/siddharth-7even/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin footer-icon"></i>
          </a>
          <a href="mailto:sidxohal9049@gmail.com">
            <i className="bi bi-envelope footer-icon"></i>
          </a>
          <a href="https://www.instagram.com/_._._7even_._._/">
            <i className="bi bi-instagram footer-icon"></i>
          </a>
        </div>
      )}
    </footer>
  );
};

export default Footer;
