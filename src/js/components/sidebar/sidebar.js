import React from 'react';
import { LrnzLogo } from '../lrnz-logo/';
import { Routes } from '../routes/';
import { Button } from '../button/';
import './style.scss';

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar-logo-container">
        <div className="sidebar-logo">
          <LrnzLogo />
        </div>
        <div className="sidebar-brand-container">
          <h2 className="sidebar-brand-name">LRNZ</h2>
        </div>
      </div>
      <div className="sidebar-contents">
        <Routes />
      </div>
      <div className="sidebar-footer">
        <Button />
      </div>
    </section>
  );
};

export default Sidebar;
