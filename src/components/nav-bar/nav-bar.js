import React from 'react';
import { StockFetcher } from '../stock-fetcher/';
import { MenuIcon } from '../../icons/';
import './style.scss';

const NavBar = () => {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <div className="main-nav__left">
          <button className="main-nav__btn button">
            <MenuIcon />
          </button>
        </div>
        <div className="main-nav__middle">
          <StockFetcher />
        </div>
        <div className="main-nav__right">
          <button className="main-nav__login">login</button>
          <button className="main-nav__register">register</button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
