import React from 'react';
import { Link } from 'react-router-dom';
import { StockFetcher } from '../stock-fetcher/';
import { Dropdown } from '../dropdown/';
import { useToggler } from '../../hooks/';
import { MenuIcon } from '../../icons/';
import { LrnzIcon } from '../../icons/';
import { ResponsiveNav } from '../responsive-nav/';
import './style.scss';

const NavBar = () => {
  const [, toggle] = useToggler();

  return (
    <header className="main-header">
      <ResponsiveNav />
      <nav className="main-nav">
        <div className="main-nav__left">
          <LrnzIcon />
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
          {/*eslint-disable*/}
          <div className="main-nav__menu" onClick={toggle}>
            <MenuIcon />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
