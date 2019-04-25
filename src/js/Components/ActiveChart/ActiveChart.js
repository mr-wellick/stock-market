import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { HistoricalChart } from "../HistoricalChart/";
import { MarketCaps } from "../MarketCaps//";
import { FinancialsChart } from "../FinancialsChart//";
import "./style.scss";

function ActiveChart(props) {
  if (props.data.length === 0) return null;

  return (
    <div className="row" style={{ margin: "0px 5px" }}>
      <div className="chart-container card col s12">
        {props.activeChart === "historical" ? <HistoricalChart /> : null}
        {props.activeChart === "marketCaps" ? <MarketCaps /> : null}
        {props.activeChart === "financials" ? <FinancialsChart /> : null}
      </div>
    </div>
  );
}

ActiveChart.propTypes = {
  data: PropTypes.array,
  activeChart: PropTypes.string
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  null
)(ActiveChart);
