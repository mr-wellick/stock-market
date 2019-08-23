import React from 'react';
//import { Link } from 'react-router-dom';
import { DashboardIcon } from '../../icons/';
import { FinancialsIcon } from '../../icons/';
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
      <div className="route-container">
        <input type="radio" name="route-selector" id="financials" className="route-input" />
        <label htmlFor="financials" className="route-label">
          <FinancialsIcon />
          <span className="route-name">Financials</span>
        </label>
      </div>
    </form>
  );
};

export default Routes;
