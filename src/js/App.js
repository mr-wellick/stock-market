import React, { Component, Fragment }           from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home }                                 from "./Views";
import "./app.scss";

class App extends Component{
    render(){
        return(
            <Router>
                <Fragment>
                    <header className="main-header">
                        <h1 className="main-header__logo--display">Valores</h1>
                        <nav className="main-nav">
                            <ul className="main-nav__items">
                                <li className="main-nav__item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="main-nav__item">
                                    <Link to="/Basics">Basics</Link>
                                </li>
                                <li className="main-nav__item">
                                    <Link to="/Portfolio">Portfolio</Link>
                                </li>
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
