import React    from "react";
import { Logo } from "../Logo/";
import { Link } from "react-router-dom";
import "./style.scss";

function Navigation() {

    function showNavbar() {
        const navbarMenu = document.querySelector(".navbar-menu");
        const burger     = document.querySelector(".navbar-burger");

        if(!navbarMenu.className.includes("is-active"))
        {
            navbarMenu.className += " is-active";
            burger.className     += " is-active";
        }
        else
        {
            navbarMenu.className = "navbar-menu";
            burger.className     = "navbar-burger burger";
        }
    }

    return(
        <section className="nav-container">
            <nav className="navbar">

                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <Logo/>
                    </Link>
                    <a className="navbar-burger burger" onClick={ showNavbar }>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link to="/basics" className="navbar-item">Basics</Link>
                        <Link to="/resources" className="navbar-item">Resources</Link>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <a className="button" href="#">GitHub</a>
                        </div>
                    </div>
                </div>

            </nav>
        </section>
    );
}

export default Navigation;
