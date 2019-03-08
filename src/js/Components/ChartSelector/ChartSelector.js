import React         from "react";
import { useState }  from "react";
import { useEffect } from "react";
import PropTypes     from "prop-types";
import { connect }   from "react-redux";
import { Suspense }  from "react";
import { lazy }      from "react";
import "./style.scss";

const HistoricalChart = lazy(() => import("../HistoricalChart/HistoricalChart.js"));
const MarketCaps      = lazy(() => import("../MarketCaps/MarketCaps.js"));
const FinancialsChart = lazy(() => import("../FinancialsChart/FinancialsChart.js"));

function useDimensions(){
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth*0.7,
        height: window.innerHeight*0.8,
        padding: 50
    });

    function resize(){
        setDimensions({
            ...dimensions,
            width: window.innerWidth*0.7,
            height: window.innerHeight*0.8,
        });
    }

    useEffect(() => {
        window.addEventListener("resize", resize);

        return function cleanUp(){
            window.removeEventListener("resize", resize);
        };
    });

    return dimensions;
}

function ChartSelector(props){
    const [chart, setChart] = useState("historical");
    const dimensions        = useDimensions();

    if(props.data.length === 0)
        return null;

    return(
        <div>
            <div className="card chart-selector-card">
                <form className="chart-selector-container">
                    <div className="field-chart">
                        <input type="radio" id="historical" name="active-chart" onChange={ event => setChart(event.target.id) } defaultChecked/>
                        <label htmlFor="historical">Historical</label>
                    </div>
                    <div className="field-chart">
                        <input type="radio" id="marketCaps" name="active-chart" onChange={ event => setChart(event.target.id) }/>
                        <label htmlFor="marketCaps">Market Cap</label>
                    </div>
                    <div className="field-chart">
                        <input type="radio" id="financials" name="active-chart" onChange={ event => setChart(event.target.id) }/>
                        <label htmlFor="financials">Financials</label>
                    </div>
                </form>
            </div>
            <div className="card chart-container">
                <Suspense fallback={<div>Loading...</div>}>
                    { chart === "historical" ? <HistoricalChart dimensions={ dimensions }/> : null }
                    { chart === "marketCaps" ? <MarketCaps dimensions={ dimensions }/>      : null }
                    { chart === "financials" ? <FinancialsChart dimensions={ dimensions }/> : null }
                </Suspense>
            </div>
        </div>
    );
}

ChartSelector.propTypes = {
    data: PropTypes.array
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(mapStateToProps, null)(ChartSelector);
