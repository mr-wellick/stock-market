import React from 'react';
import { Link } from 'react-router-dom';
import { StockFetcher } from '../stock-fetcher/';
import { MenuIcon } from '../../icons/';
import { LrnzIcon } from '../../icons/';
import { useToggled } from '../../hooks/';
import './style.scss';

const NavBar = () => {
  const [, setToggled] = useToggled();

  return (
    <header className="nav-container">
      <div className="nav-icon">
        <LrnzIcon />
      </div>
      <StockFetcher />
      <div className="nav-btns">
        <Link className="btn btn-blue" to="/login">
          Login
        </Link>
        <Link className="btn btn-blue" to="/register">
          Register
        </Link>
        {/* eslint-disable */}
        <div className="nav-menu" onClick={setToggled}>
          <MenuIcon />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
