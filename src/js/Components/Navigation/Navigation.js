import React from "react";
import { Logo } from "../Logo/";
import { Link } from "@reach/router";
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
            <Link className="align-collection-item white-text title" to="/statements">
              Statements
            </Link>
          </li>
        */}
      </ul>
    </section>
  );
};

export default Navigation;
