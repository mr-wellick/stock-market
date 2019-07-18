import React from 'react';
import './style.scss';

const Navigation = () => {
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
            <a className="nav-item__link" href="/dashboard">
              Dashboard
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
