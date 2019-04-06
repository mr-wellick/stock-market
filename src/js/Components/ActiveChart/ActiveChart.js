import React               from "react";
import PropTypes           from "prop-types";
import { connect }         from "react-redux";
import { HistoricalChart } from "../HistoricalChart/";

function ActiveChart(props) {
    if(props.data.length === 0)
        return null;

    return (
        <div>
            { props.activeChart === "historical" ? <HistoricalChart/> : null }
        </div>
    );
}

ActiveChart.propTypes = {
    data: PropTypes.array,
    activeChart: PropTypes.string
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(mapStateToProps, null)(ActiveChart);
