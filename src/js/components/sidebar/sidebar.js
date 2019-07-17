import React from 'react';
import { LrnzLogo } from '../lrnz-logo/';
import { Button } from '../button/';
import './style.scss';

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar-logo-container">
        <div className="sidebar-logo">
          <LrnzLogo />
        </div>
        <div className="sidebar-brand">
          <h3>LRNZ</h3>
        </div>
      </div>
      <div className="sidebar-contents">
        <ul className="sidebar-list">
          <li className="sidebar-list__item">Dashboard</li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <div className="sidebar-footer-icon">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
