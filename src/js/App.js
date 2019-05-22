import "./app.scss";
import React from "react";
import { Component } from "react";
import { Fragment } from "react";
import { HashRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import { Navigation } from "./Components/";
import { Home } from "./Views/";
//import { Basics }     from "./Views/";
//import { Resources }  from "./Views/";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="main-container row">
          <div className="main-sidebar-container col s3">
            <Navigation />
          </div>
          <div className="main-content-container col s9 right">
            <Fragment>
              <Switch>
                <Route exact path="/" component={Home} />
                {/*
                  <Route exact path="/basics" component={ basics }></route>
                  <Route exact path="/resources" component={ resources }></route>
                */}
              </Switch>
            </Fragment>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default hot(App);
