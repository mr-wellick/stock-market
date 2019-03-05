import React          from "react";
import { Logo }       from "../Logo/";
import { InputStock } from "../InputStock/";
import "./style.scss";

function Navigation() {
    return(
        <section>
            <nav className="navbar has-shadow is-fixed-top">
                <div className="navbar-brand">
                    <Logo className="navbar-item"/>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <InputStock className="navbar-item"/>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <span className="icon">
                                <i className="fas fa-home fa-lg"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Navigation;
