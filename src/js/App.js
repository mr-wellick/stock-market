import React               from "react";
import { Component }       from "react";
import { Fragment }        from "react";
import { hot }             from "react-hot-loader";
import { Navigation }      from "./Components/";
import { StockSelector }   from "./Components/";
import { FinancialsTable } from "./Components/";
import { lazy }            from "react";
import { Suspense }        from "react";
import "./app.scss";

const ChartSelector    = lazy(() => import("./Components/ChartSelector/ChartSelector.js"));
const StockDescription = lazy(() => import("./Components/StockDescription/StockDescription.js"));
const StockNews        = lazy(() => import("./Components/StockNews/StockNews.js"));

// react-hot-loader complains when using plain functions
class App extends Component {
    render(){
        return(
            <Fragment>
                <Navigation/>
                <section className="home-container">
                    <div className="home-sidebar">
                        <StockSelector/>
                    </div>
                    <div className="home-content">
                        <Suspense fallback={ <h1>Loading...</h1> }>
                            <FinancialsTable/>
                            <ChartSelector/>
                            <StockDescription/>
                            <StockNews/>
                        </Suspense>
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
