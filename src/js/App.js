import "./app.scss";
import React, { Component, Fragment }      from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import { Home }                            from "./Views";
import { Footer }                          from "./Components";

class App extends Component{
    render(){
        return(
            <HashRouter>
                <Fragment>
                    <header className="main-header">
                        <h1 className="main-header__logo--display">&sigma; Stocks</h1>
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
                    <Switch>
                        <Route exact path="/" component={ Home }></Route>
                        {/*
                            <Route exact path="/Basics" component={ Basics }></Route>
                            <Route exact path="/Portfolio" component={ Portfolio }></Route>
                        */}
                    </Switch>
                    <Route path="/" component={ Footer }></Route>
                </Fragment>
            </HashRouter>
        );
    }
}

export default App;