import React from 'react';
//import { Link } from 'react-router-dom';
import { DashboardIcon } from '../../icons/';
import './style.scss';

// Note: Form of type radio doesn't play nicely with imbedded <Links/> within the
//       <label/> tag.

const Routes = () => {
  return (
    <form className="routes">
      <div className="route-container">
        <input
          type="radio"
          name="route-selector"
          id="dashboard"
          className="route-input"
          defaultChecked
        />
        <label htmlFor="dashboard" className="route-label">
          <DashboardIcon />
          <span className="route-name">Dashboard</span>
        </label>
      </div>
    </form>
  );
};

export default Routes;
