import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from '@reach/router';
import { DashboardIcon } from '../../icons/';
import { FinancialsIcon } from '../../icons/';
import './style.scss';

const Routes = () => {
  const { className } = useSelector(state => state.uiReducer);

  return (
    <nav className="nav">
      <ul className="nav-items">
        <li className="nav-item">
          <div className="nav-item__container">
            <i className="nav-item__icon">
              <DashboardIcon />
            </i>
            <Link className={`nav-item__link ${className}`} to="/">
              Dashboard
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-item__container">
            <i className="nav-item__icon">
              <FinancialsIcon />
            </i>
            <Link className={`nav-item__link ${className}`} to="/financials">
              Financials
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Routes;
