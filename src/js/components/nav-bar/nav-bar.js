import React from 'react';
import './style.scss';

const NavBar = () => {
  return (
    <section className="nav-bar-section">
      <header className="nav-bar-header">
        <div className="nav-bar__left">
          <button className="button">
            <svg height="24px" width="24px">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>
        </div>
        <div className="nav-bar__middle">
          <form>
            <input type="text" />
          </form>
        </div>
        <div className="nav-bar__right">
          <button className="button">x</button>
        </div>
      </header>
    </section>
  );
};

export default NavBar;
