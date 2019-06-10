import "./app.scss";
import React from "react";
import { hot } from "react-hot-loader/root";
import { Navigation } from "./Components/";
import { SmallLoader } from "./Components/";
import { Router } from "@reach/router";
import { Home } from "./Views/";
import { Statements } from "./Views/";

const App = () => {
  return (
    <div className="main-container row">
      <div className="main-sidebar-container col s3">
        <SmallLoader />
        <Navigation />
      </div>
      <div className="main-content-container col s9 right">
        <Router>
          <Home path="/" />
          <Statements path="/statements" />
        </Router>
      </div>
    </div>
  );
};

export default hot(App);
