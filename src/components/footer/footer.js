import React from 'react';
import { LrnzIcon } from '../../icons/';
import './style.scss';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <LrnzIcon />
        <p className="footer-tagline">Developed by</p>
        <a
          className="footer-link"
          href="https://github.com/Ll2NZ/stock-market"
          target="_blank"
          rel="noopener noreferrer"
        >
          LRNZ
        </a>
      </div>
    </footer>
  );
};

export default Footer;
