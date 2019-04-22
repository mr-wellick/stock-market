import "./app.scss";
import React from "react";
import { Component } from "react";
import { Fragment } from "react";
import { HashRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Navigation } from "./Components/";
//import { Home } from "./Views/";
//import { Basics }     from "./Views/";
//import { Resources }  from "./Views/";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Navigation />
          <Switch>
            {/*
              <Route exact path="/" component={Home} />
              <Route exact path="/basics" component={ basics }></route>
              <Route exact path="/resources" component={ resources }></route>
            */}
          </Switch>
        </Fragment>
      </HashRouter>
    );
  }
}

export default App;
