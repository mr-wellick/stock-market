import React          from "react";
//import PropTypes      from "prop-types";
import { Logo }       from "../Logo/";
import { InputStock } from "../InputStock/";
import "./style.scss";

function Navigation() {
    return(
        <section>
            <nav className="navbar">
                <Logo/>
                <InputStock/>
            </nav>
        </section>
    );
}

export default Navigation;
