import React from 'react';
import { Link } from 'react-router-dom';
import { StockFetcher } from '../stock-fetcher/';
import { Dropdown } from '../dropdown/';
import { MenuIcon } from '../../icons/';
import './style.scss';

const NavBar = () => {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <div className="main-nav__left">
          <StockFetcher />
          <Dropdown />
        </div>
        <div className="main-nav__right">
          <button className="main-nav__btn">
            <Link to="/login">login</Link>
          </button>
          <button className="main-nav__btn">
            <Link to="/register">register</Link>
          </button>
          <button className="main-nav__menu">
            <MenuIcon />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
