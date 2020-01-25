import React from 'react';
import { Routes } from '../routes/';
import { LrnzIcon } from '../../icons/';
import './style.scss';

const Sidebar = () => {
  return (
    <section className="sidebar-container">
      <div className="sidebar-header">
        <LrnzIcon />
        <p className="sidebar-brand">LRNZ</p>
      </div>
      <Routes />
    </section>
  );
};

export default Sidebar;
