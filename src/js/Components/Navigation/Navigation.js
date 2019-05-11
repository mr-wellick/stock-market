import React from "react";
import { Logo } from "../Logo/";
import { Link } from "react-router-dom";
import "./style.scss";

function Navigation() {
  return (
    <section className="navbar-fixed">
      <div className="row">
        <nav className="main-nav col s12 white z-depth-0">
          <Link to="/">
            <Logo />
          </Link>
          <ul>
            {/*
            <li><Link className="black-text" to="/basics">Basics</Link></li>
            <li><Link className="black-text" to="/resources">Resources</Link></li>
            */}
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Navigation;
