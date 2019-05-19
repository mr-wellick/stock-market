import React from "react";
import { Logo } from "../Logo/";
import { Link } from "react-router-dom";
import "./style.scss";

function Navigation() {
  return (
    <section className="main-nav-section">
      <div className="lrnz-logo-container">
        <Logo />
        <span className="lrnz-text white-text">LRNZ</span>
      </div>
      <ul className="collection">
        <li className="collection-item valign-wrapper" id="collection-item-override">
          <i className="material-icons cyan-text lighten-5 circle">home</i>
          <Link className="align-collection-item white-text title" to="/">
            Home
          </Link>
        </li>
        <li className="collection-item valign-wrapper" id="collection-item-override">
          <i className="material-icons cyan-text lighten-5 circle">graphic_eq</i>
          <Link className="align-collection-item white-text title" to="/basics">
            Basics
          </Link>
        </li>
        <li className="collection-item valign-wrapper" id="collection-item-override">
          <i className="material-icons cyan-text lighten-5 circle">contact_mail</i>
          <Link className="align-collection-item white-text title" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Navigation;
