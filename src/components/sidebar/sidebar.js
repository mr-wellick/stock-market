import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../redux/';
import { LrnzLogo } from '../lrnz-logo/';
import { Routes } from '../routes/';
import { Button } from '../button/';
import './style.scss';

const Sidebar = () => {
  const [toggled, setToggled] = useState(true);
  const { className } = useSelector(state => state.uiReducer);
  const dispatch = useDispatch();

  const onClick = () => {
    setToggled(!toggled);
    dispatch(toggleSidebar(toggled));
  };

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
      {/* eslint-disable */}
      <div className="sidebar-footer" onClick={onClick}>
        <Button />
      </div>
    </section>
  );
};

export default Sidebar;
