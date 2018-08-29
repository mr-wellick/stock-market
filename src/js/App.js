// React & React-Router
import React, { Component, Fragment }           from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home }                                 from "./Views";
import "./app.scss";

class App extends Component{
    render(){
        return(
            <Router>
                <Fragment>
                    <header>
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <Route exact path="/" component={ Home }></Route>
                </Fragment>
            </Router>
        );
    }
}

export default App;