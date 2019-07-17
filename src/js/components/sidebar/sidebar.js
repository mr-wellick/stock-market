import React from 'react';
import { LrnzLogo } from '../lrnz-logo/';
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
          <span className="dot">
            <svg width="20px" height="20px">
              <path d="M5.46 8.846l3.444-3.442-1.058-1.058-4.5 4.5 4.5 4.5 1.058-1.057L5.46 8.84zm7.194 4.5v-9h-1.5v9h1.5z" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
