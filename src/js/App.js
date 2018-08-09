// React & React-Router
import React, { Component, Fragment }           from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import CSS
import "./app.scss";

// Import user defined components
import { Home }   from "./Views";
import { Footer } from "./Views";

// Application
class App extends Component{
    render(){
        return(
            <Router>
                <Fragment>
                    <header className="header">
                        <h1 className="header__title">LRNZ</h1>
                        <nav className="header__navigation">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <Route exact path="/" component={ Home }></Route>
                    <Route path="/" component={ Footer }></Route>
                </Fragment>
            </Router>
        );
    }
}

export default App;
