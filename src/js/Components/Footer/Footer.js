import React from "react";
import { Logo } from "../Logo/";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="developed-by">
        <Logo />
        <span className="grey-text">
          Developed by&nbsp;
          <a
            className="text-lighten-4"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Ll2NZ"
          >
            LRNZ
          </a>
        </span>
      </div>
      <div>
        <span className="grey-text">
          Data provided by&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://iexcloud.io/docs/api/">
            IEX
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
