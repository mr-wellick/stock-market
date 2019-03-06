import React               from "react";
import { useState }        from "react";
import PropTypes           from "prop-types";
import { HistoricalChart } from "../HistoricalChart/";
import { MarketCaps }      from "../MarketCaps/";
import { connect }         from "react-redux";
import "./style.scss";

function ChartSelector(props){
    const [chart, setChart] = useState("historical");
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth*0.7,
        height: window.innerHeight*0.8,
        padding: 50
    });

    if(props.data.length === 0)
        return null;

    return(
        <div>
            <form>
                <div>
                    <input type="radio" id="historical" name="active-chart" onChange={ event => setChart(event.target.id) } defaultChecked/>
                    <label htmlFor="historical">Historical</label>
                </div>
                <div>
                    <input type="radio" id="marketCaps" name="active-chart" onChange={ event => setChart(event.target.id) }/>
                    <label htmlFor="marketCaps">Market Cap</label>
                </div>
                <div>
                    <input type="radio" id="financials" name="active-chart" onChange={ event => setChart(event.target.id) }/>
                    <label htmlFor="financials">Historical</label>
                </div>
            </form>
            { chart === "historical" ? <HistoricalChart dimensions={ dimensions }/> : null }
            { chart === "marketCaps" ? <MarketCaps dimensions={ dimensions }/>      : null }
            { chart === "financials" ? <FinancialsChart dimensions={ dimensions }/> : null }
        </div>
    );
}

ChartSelector.propTypes = {
    data: PropTypes.array
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(mapStateToProps, null)(ChartSelector);
