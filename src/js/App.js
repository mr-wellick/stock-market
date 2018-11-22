import React          from "react";
import { Component }  from "react";
import { Fragment }   from "react";
import { HashRouter } from "react-router-dom";
//import { Route }      from "react-router-dom";
//import { Switch }     from "react-router-dom";
import { Link }       from "react-router-dom";
//import { Home }       from "./Views/";
//import { Basics }     from "./Views/";
import { InputStock } from "./Components/";
import { hot }        from "react-hot-loader";
import "./app.scss";

class App extends Component{
    render(){
        return(
            <HashRouter>
                <Fragment>
                    <header className="main-header">
                        <nav className="main-nav">
                            <ul className="main-nav__items">
                                <li className="main-nav__item main-nav__logo">
                                    <Link to="/">Stocks</Link>
                                </li>
                                <li className="main-nav__item">
                                    <Link to="/basics">basics</Link>
                                </li>
                            </ul>
                        </nav>
                        <InputStock/>
                    </header>
                    {/*
                        <Switch>
                            <Route exact path="/" component={ Home }></Route>
                                <Route exact path="/basics" component={ Basics }></Route>
                        </Switch>
                    */}
                </Fragment>
            </HashRouter>
        );
    }
}

let Application;

if(process.env.NODE_ENV === "development")
    Application = hot(module)(App);
else
    Application = App;

export default Application;
