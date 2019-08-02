import React from 'react';
import { StockFetcher } from '../stock-fetcher/';
import { HamburgerMenu } from '../../icons/';
import './style.scss';

const NavBar = () => {
  return (
    <section className="nav-bar-section">
      <header className="nav-bar-header">
        <div className="nav-bar__left">
          <button className="button" id="nav-button">
            <HamburgerMenu />
          </button>
        </div>
        <div className="nav-bar__middle">
          <StockFetcher />
        </div>
        <div className="nav-bar__right">
          <button className="nav-login-btn">login</button>
          <button className="nav-register-btn">register</button>
        </div>
      </header>
    </section>
  );
};

export default NavBar;
