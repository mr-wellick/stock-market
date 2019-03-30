import React               from "react";
import { lazy }            from "react";
import { Suspense }        from "react";
import { StockSelector }   from "../../Components/";
import { FinancialsTable } from "../../Components/";
import "./style.scss";

const ChartSelector    = lazy(() => import("../../Components/ChartSelector/ChartSelector.js"));
const StockDescription = lazy(() => import("../../Components/StockDescription/StockDescription.js"));
const StockNews        = lazy(() => import("../../Components/StockNews/StockNews.js"));

function Home(){
    return(
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
    );
}

export default Home;
