import React from 'react';
import { lazy } from 'react';
import { Suspense } from 'react';
import { StockFetcher } from '../stock-fetcher/';
//import { Dropdown } from '../dropdown/';
import './style.scss';

const Dropdown = lazy(() => import('../dropdown/dropdown.js'));

const NavBar = () => {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <div className="main-nav__left">
          <StockFetcher />
          <Suspense fallback={'<div>loading</div>'}>
            <Dropdown />
          </Suspense>
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
