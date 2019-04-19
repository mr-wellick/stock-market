import React    from "react";
import { Logo } from "../Logo/";
import { Link } from "react-router-dom";
import "./style.scss";

function Navigation() {
    return(
        <section>
            <nav>
                <Link to="/">
                    <Logo/>
                </Link>
                <Link to="/basics">Basics</Link>
                <Link to="/resources">Resources</Link>
            </nav>
        </section>
    );
}

export default Navigation;
