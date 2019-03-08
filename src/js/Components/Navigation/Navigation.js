import React          from "react";
import { Logo }       from "../Logo/";
import { InputStock } from "../InputStock/";
import "./style.scss";

function Navigation() {
    return(
        <section className="home-section">
            <nav className="home-nav">
                <div className="home-brand">
                    <Logo className="navbar-item"/>
                </div>
                <div className="home-menu">
                    <div className="home-menu-start">
                        <InputStock className="navbar-item"/>
                    </div>
                    <div className="home-menu-end">
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
