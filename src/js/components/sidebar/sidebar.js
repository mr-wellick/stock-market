import React from 'react';
import './style.scss';

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar-logo">
        <a href="lrnz">Logo</a>
      </div>
      <div className="sidebar-contents">
        <ul className="sidebar-list">
          <li className="sidebar-list__item">Dashboard</li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
