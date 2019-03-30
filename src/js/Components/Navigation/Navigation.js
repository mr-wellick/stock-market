import React          from "react";
import { Logo }       from "../Logo/";
import { InputStock } from "../InputStock/";
import { Link }       from "react-router-dom";
import "./style.scss";

function Navigation() {
    return(
        <section className="home-section">
            <nav className="home-nav">
                <div className="home-brand">
                    <Link to="/">
                        <Logo className="navbar-item"/>
                    </Link>
                </div>
                <div className="home-menu">
                    <div className="home-menu-start">
                        <InputStock className="navbar-item"/>
                    </div>
                    <div className="home-menu-end">
                        <Link to="/basics" className="navbar-item">Basics</Link>
                        <Link to="/resources" className="navbar-item">Resources</Link>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Navigation;
