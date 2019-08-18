import React from 'react';
import { useSelector } from 'react-redux';
import { Routes } from '../routes/';
import { LrnzIcon } from '../../icons/';
import './style.scss';

const Sidebar = () => {
  const { className } = useSelector(state => state.uiReducer);

  return (
    <section className={`sidebar ${className}`}>
      <div className="sidebar-header">
        <LrnzIcon />
        <p className={`sidebar-header__brand ${className}`}>LRNZ</p>
      </div>
      <div className="sidebar-routes">
        <Routes />
      </div>
    </section>
  );
};

export default Sidebar;
