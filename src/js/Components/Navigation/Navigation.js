import React from "react";
//import { Logo } from "../Logo/";
import { Link } from "react-router-dom";
import "./style.scss";

function Navigation() {
  return (
    <section>
      <div className="navbar-fixed">
        <nav className="white z-depth-0">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo black-text">
              Logo
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/basics" className="black-text">Basics</Link>
              </li>
              <li>
                <Link to="/resources" className="black-text">Resources</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navigation;
