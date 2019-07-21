import React from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../redux/';
import { LrnzLogo } from '../lrnz-logo/';
import { Routes } from '../routes/';
import { Button } from '../button/';
import './style.scss';

const Sidebar = props => {
  return (
    <section className={`sidebar ${props.className}`}>
      <div className="sidebar-logo-container">
        <div className="sidebar-logo">
          <LrnzLogo />
        </div>
        <div className="sidebar-brand-container">
          <h2 className={`sidebar-brand-name ${props.className}`}>LRNZ</h2>
        </div>
      </div>
      <div className="sidebar-contents">
        <Routes />
      </div>
      <div className="sidebar-footer" onClick={props.toggleSidebar}>
        <Button />
      </div>
    </section>
  );
};

const mapStateToPros = state => state.uiReducer;

export default connect(
  mapStateToPros,
  { toggleSidebar }
)(Sidebar);
