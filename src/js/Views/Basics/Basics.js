import React          from "react";
import PropTypes      from "prop-types";
import { Component }  from "react";
import { Route }      from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { Switch }     from "react-router-dom";
import { Link }       from "react-router-dom";
import Intro          from "./Intro.js";
import Resources      from "./Resources.js";
import "./basics.scss";

class Basics extends Component{
    static propTypes = {
        match: PropTypes.object
    }

    render(){
        let { match } = this.props;

        return(
                <>
                <section style={{ marginTop: "75px" }}>
                    <header>
                        <ul>
                            <li>
                                <Link to={ `${match.url}/Intro` }>Intro</Link>
                            </li>
                            <li>
                                <Link to={ `${match.url}/Resources` }>Resources</Link>
                            </li>
                        </ul>
                    </header>
                </section>
                <Route path={ `${match.path}` } component={ Intro }/>
                <Route path={ `${match.path}` } component={ Resources }/>
                </>
        );
    }
}

export default Basics;
