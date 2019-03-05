import React          from "react";
import { Component }  from "react";
import { Fragment }   from "react";
import { hot }        from "react-hot-loader";
import { Navigation } from "./Components/";
import "./app.scss";

// react-hot-loader complains when using plain functions
class App extends Component{
    render(){
        return(
            <Fragment>
                <Navigation/>
            </Fragment>
        );
    }
}

let Application;

if(process.env.NODE_ENV === "development")
    Application = hot(module)(App);
else
    Application = App;

export default Application;
