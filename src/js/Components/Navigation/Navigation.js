import React from "react";
import { Logo } from "../Logo/";
import { Link } from "react-router-dom";
import "./style.scss";

const Navigation = () => {
  return (
    <section className="main-nav-section">
      <ul className="collection with-header">
        <li className="collection-header lrnz-logo-header white-text" id="collection-item-override">
          <Logo />
          <h4 className="lrnz-text">LRNZ</h4>
        </li>
        <li className="collection-item valign-wrapper white-text" id="collection-item-override">
          <i className="material-icons cyan-text lighten-5 circle">home</i>
          <Link className="align-collection-item white-text title" to="/">
            Home
          </Link>
        </li>
        {/*
        <li className="collection-item valign-wrapper white-text" id="collection-item-override">
          <i className="material-icons cyan-text lighten-5 circle">graphic_eq</i>
          <Link className="align-collection-item white-text title" to="/basics">
            Basics
          </Link>
        </li>
        <li className="collection-item valign-wrapper white-text" id="collection-item-override">
          <i className="material-icons cyan-text lighten-5 circle">contact_mail</i>
          <Link className="align-collection-item white-text" to="/contact">
            Contact
          </Link>
        </li>
        */}
      </ul>
    </section>
  );
};

export default Navigation;
