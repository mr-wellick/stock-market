import React from 'react';
import { Link } from 'react-router-dom';
import { StockFetcher } from '../stock-fetcher/';
import { MenuIcon } from '../../icons/';
import './style.scss';

const NavBar = () => {
  return (
    <header className="nav-container">
      <StockFetcher />
      <div className="nav-buttons">
        <Link className="nav-login" to="/login">
          login
        </Link>
        <Link className="nav-register" to="/register">
          register
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
