import React from "react";
import { Component } from "react";
import "./style.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="main-footer__container">
          <p>
            <span>
              Developed by&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Ll2NZ/securities-app"
              >
                Ll2NZ
              </a>
            </span>
            <span className="dev-info"> | </span>
            <span className="dev-info">
              Data provided for free by&nbsp;
            </span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://iextrading.com/developer/"
              className="dev-info"
            >
              IEX
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
