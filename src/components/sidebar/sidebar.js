import React from 'react';
import { Routes } from '../routes/';
import { LrnzIcon } from '../../icons/';
import { ArrowIcon } from '../../icons/';
import { useToggler } from '../../hooks/';
import './style.scss';

const Sidebar = () => {
  const [className, toggle] = useToggler();

  return (
    <section className={`sidebar ${className}`}>
      <div className="sidebar-header">
        <LrnzIcon />
        <p className={`sidebar-header__brand ${className}`}>LRNZ</p>
      </div>
      <div className="sidebar-routes">
        <Routes />
      </div>
      <div className="sidebar-footer">
        <button className="sidebar-footer__btn" onClick={toggle}>
          <ArrowIcon />
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
