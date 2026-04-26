import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">T.O.</div>
          <p className="footer-tagline">Building systems that scale.</p>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Tobiloba Oyelakin. All rights reserved.</p>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
