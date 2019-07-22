import React from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import './style.scss';

const Routes = props => {
  return (
    <nav className="nav">
      <ul className="nav-items">
        <li className="nav-item">
          <div className="nav-item__container">
            <i className="nav-item__icon">
              <svg height="18px" width="18px">
                <path d="M17 9.008l-3.363-3.363-1.883 1.883 1.48 1.48-1.48 1.48 1.883 1.882L17 9.008zM8.992 1l3.363 3.363-1.883 1.883-1.48-1.48-1.48 1.48L5.63 4.363 8.992 1zm.016 16l-3.363-3.363 1.883-1.883 1.48 1.48 1.48-1.48 1.882 1.883L9.008 17zM1 8.992l3.363 3.363 1.883-1.883-1.48-1.48 1.48-1.48L4.363 5.63 1 8.992zM9.008 7.32l1.688 1.688-1.688 1.688-1.69-1.688 1.69-1.69z" />
              </svg>
            </i>
            <Link className={`nav-item__link ${props.className}`} to="/">
              Dashboard
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-item__container">
            <i className="nav-item__icon">
              <svg height="18px" width="18px">
                <path d="M14 7V2.02h-2V7h-2V2.02H8V7H6V2.02H4.097V7H3v1h12V7zm0 3.02h-2V15h-2v-4.98H8V15H6v-4.98H4.097V15H3v1h12v-1h-1z" />
              </svg>
            </i>
            <Link className={`nav-item__link ${props.className}`} to="/financials">
              Financials
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToPros = state => state.uiReducer;

export default connect(
  mapStateToPros,
  null
)(Routes);
