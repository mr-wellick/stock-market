import React          from "react";
import PropTypes      from "prop-types";
import { Component }  from "react";
import { Route }      from "react-router-dom";
import { Link }       from "react-router-dom";
import "./basics.scss";

const Topic = () => (
    <h1>Not working</h1>
);

class Basics extends Component{
    static propTypes = {
        match: PropTypes.object
    }

    render(){
        let { match } = this.props;

        return(
            <section style={{ marginTop: "75px" }}>
                <header>
                    <ul>
                        <li>
                            <Link to={ `${match.url}/intro` }>Intro</Link>
                        </li>
                        <li>
                            <Link to={ `${match.url}/resources` }>Resources</Link>
                        </li>
                    </ul>
                </header>
                <Route exact path={ `${match.path}` } component={ Topic }/>
            </section>
        );
    }
}

export default Basics;
