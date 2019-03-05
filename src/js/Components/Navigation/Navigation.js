import React          from "react";
//import PropTypes      from "prop-types";
import { Logo }       from "../Logo/";
import { InputStock } from "../InputStock/";
import "./style.scss";

function Navigation() {
    return(
        <section>
            <nav className="navbar">
                <div className="navbar-brand">
                    <Logo className="navbar-item"/>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <InputStock className="navbar-item"/>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Navigation;
