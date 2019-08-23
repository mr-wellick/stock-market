import React from 'react';
import { Routes } from '../routes/';
import { LrnzIcon } from '../../icons/';
import './style.scss';

const Sidebar = () => {
  return (
    <section className="sidebar" style={{ borderRight: '1.1px solid rgba(0, 0, 0, 0.12)' }}>
      <div className="sidebar-header">
        <LrnzIcon />
        <p className="sidebar-header__brand">LRNZ</p>
      </div>
      <div className="sidebar-routes">
        <Routes />
      </div>
    </section>
  );
};

export default Sidebar;
