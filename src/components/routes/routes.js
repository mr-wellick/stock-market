import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DashboardIcon } from '../../icons/';
import { FinancialsIcon } from '../../icons/';
import './style.scss';

const Routes = () => {
  const { className } = useSelector(state => state.uiReducer);

  return (
    <form className="form-routes">
      <div className="route-container">
        <input
          type="radio"
          id="dashboard"
          name="route-selector"
          className="route-input"
          defaultChecked
        />
        <Link to="/" className="route-link">
          <DashboardIcon />
          <label htmlFor="dashboard" className={`route-label ${className}`}>
            Dashboard
          </label>
        </Link>
      </div>
      <div className="route-container">
        <input type="radio" id="financials" name="route-selector" className="route-input" />
        <Link to="/financials/" className="route-link">
          <FinancialsIcon />
          <label htmlFor="financials" className={`route-label ${className}`}>
            Financials
          </label>
        </Link>
      </div>
    </form>
  );
};

export default Routes;
