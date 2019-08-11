import React from 'react';
import { StockFetcher } from '../stock-fetcher/';
import './style.scss';

const NavBar = () => {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <div className="main-nav__left">
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
