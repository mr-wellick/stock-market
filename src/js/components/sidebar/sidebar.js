import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../redux/';
import { LrnzLogo } from '../lrnz-logo/';
import { Routes } from '../routes/';
import { Button } from '../button/';
import './style.scss';

const Sidebar = () => {
  const { className } = useSelector(state => state.uiReducer);
  const dispatch = useDispatch();

  return (
    <section className={`sidebar ${className}`}>
      <div className="sidebar-logo-container">
        <div className="sidebar-logo">
          <LrnzLogo />
        </div>
        <div className="sidebar-brand-container">
          <h2 className={`sidebar-brand-name ${className}`}>LRNZ</h2>
        </div>
      </div>
      <div className="sidebar-contents">
        <Routes />
      </div>
      <div className="sidebar-footer" onClick={() => dispatch(toggleSidebar())}>
        <Button />
      </div>
    </section>
  );
};

export default Sidebar;
