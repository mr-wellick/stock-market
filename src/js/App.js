import "bulma/css/bulma.css";
import "./app.scss";
import React             from "react";
import { Component }     from "react";
import { Fragment }      from "react";
import { hot }           from "react-hot-loader";
import { Navigation }    from "./Components/";
import { StockSelector } from "./Components/";

// react-hot-loader complains when using plain functions
class App extends Component {
    render(){
        return(
            <Fragment>
                <Navigation/>
                <section className="home-content">
                    <div className="home-sidebar">
                        <StockSelector/>
                    </div>
                    <div className="home-data">
                        test
                    </div>
                </section>
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
