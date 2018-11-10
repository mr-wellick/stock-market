import React          from "react";
import { Component }  from "react";
import { Fragment }   from "react";
import { HashRouter } from "react-router-dom";
import { Route }      from "react-router-dom";
import { Switch }     from "react-router-dom";
import { Link }       from "react-router-dom";
import { Home }       from "./Views/";
import { Input }      from "./Components/";
import { hot }        from "react-hot-loader";
import "./app.scss";

class App extends Component{
    render(){
        return(
            <HashRouter>
                <Fragment>
                    <header className="main-header">
                        <div className="main-header__container">
                            <a className="main-header__logo">Stocks</a>
                            <nav className="main-nav">
                                <ul className="main-nav__items">
                                    <li className="main-nav__item">
                                        <Link to="/">Home</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <Input/>
                    </header>
                    <Switch>
                        <Route exact path="/" component={ Home }></Route>
                    </Switch>
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
