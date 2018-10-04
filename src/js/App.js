import React          from "react";
import { Component }  from "react";
import { Fragment }   from "react";
import { HashRouter } from "react-router-dom";
import { Route }      from "react-router-dom";
import { Switch }     from "react-router-dom";
import { Link }       from "react-router-dom";
import { Home }       from "./Views";
import "./app.scss";

class App extends Component{
    render(){
        return(
            <HashRouter>
                <Fragment>
                    <div className="main-header-container">
                        <header className="main-header">
                            <h1 className="main-header__logo">Stocks</h1>
                            <nav className="main-nav">
                                <ul className="main-nav__items">
                                    <li className="main-nav__item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <p>Basics</p>
                                    </li>
                                    <li>
                                        <p>Portfolio</p>
                                    </li>
                                </ul>
                            </nav>
                        </header>
                    </div>
                    <Switch>
                        <Route exact path="/" component={ Home }></Route>
                    </Switch>
                </Fragment>
            </HashRouter>
        );
    }
}

export default App;
