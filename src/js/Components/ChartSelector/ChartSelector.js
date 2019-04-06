import React              from "react";
import PropTypes          from "prop-types";
import { connect }        from "react-redux";
import { setActiveChart } from "../../Redux/";
import "./style.scss";

function ChartSelector(props){
    function changeChart(event) {
        props.setActiveChart(event.target.id);
    }

    if(props.data.length === 0)
        return null;

    return(
        <div className="card chart-selector-card">
            <h1 className="message">Active Chart</h1>
            <form className="chart-selector-form">
                <div className="field-chart">
                    <input type="radio" id="historical" name="active-chart" defaultChecked onChange={ changeChart }/>
                    <label htmlFor="historical">Historical</label>
                </div>
                <div className="field-chart">
                    <input type="radio" id="marketCaps" name="active-chart" onChange={ changeChart }/>
                    <label htmlFor="marketCaps">Market Cap</label>
                </div>
                <div className="field-chart">
                    <input type="radio" id="financials" name="active-chart" onChange={ changeChart }/>
                    <label htmlFor="financials">Financials</label>
                </div>
            </form>
        </div>
    );
}

ChartSelector.propTypes = {
    data: PropTypes.array,
    setActiveChart: PropTypes.func
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(mapStateToProps, { setActiveChart })(ChartSelector);
