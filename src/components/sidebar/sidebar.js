import React from 'react';
import { Routes } from '../routes/';
import { LrnzIcon } from '../../icons/';
import { ExitIcon } from '../../icons/';
import { useToggler } from '../../hooks/';
import './style.scss';

const Sidebar = () => {
  const [toggled, setToggled] = useToggler();

  return (
    <section className={`sidebar ${toggled}`}>
      <div className="sidebar-header">
        <LrnzIcon />
        <p className="sidebar-brand">LRNZ</p>
        {/* eslint-disable */}
        <div className="sidebar-btn" onClick={setToggled}>
          <ExitIcon />
        </div>
      </div>
      <div className="sidebar-routes">
        <Routes />
      </div>
    </section>
  );
};

export default Sidebar;
