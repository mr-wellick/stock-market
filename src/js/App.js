import React          from "react";
import { Component }  from "react";
import { Fragment }   from "react";
import { hot }        from "react-hot-loader";
import { HashRouter } from "react-router-dom";
import { Switch }     from "react-router-dom";
import { Route }      from "react-router-dom";
import { Navigation } from "./Components/";
import { Home }       from "./Views/";
import { Basics }     from "./Views/";
import { Resources }  from "./Views/";
import "./app.scss";

// react-hot-loader complains when using plain functions
class App extends Component {
    render(){
        return(
            <HashRouter>
                <Fragment>
                    <Navigation/>
                    <Switch>
                        <Route exact path="/" component={ Home }></Route>
                        <Route exact path="/basics" component={ Basics }></Route>
                        <Route exact path="/resources" component={ Resources }></Route>
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
