import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { connect } from "react-redux";
import { StockHeader } from "../StockHeader/";
import { StockSelector } from "../StockSelector/";
import { ChartSelector } from "../ChartSelector/";
import "./style.scss";

const MarketCaps = lazy(() => import("../MarketCaps/MarketCaps.js"));
const FinancialsChart = lazy(() => import("../FinancialsChart/FinancialsChart.js"));
const HistoricalChart = lazy(() => import("../HistoricalChart/HistoricalChart.js"));
//import { HistoricalChart } from "../HistoricalChart/";

const ActiveChart = props => {
  if (props.data.length === 0) {
    return null;
  }

  return (
    <div className="card chart-container">
      <div className="row">
        <div className="col s8">
          <StockHeader />
          <Suspense fallback={<div>Loading...</div>}>
            {props.activeChart === "historical" ? <HistoricalChart /> : null}
            {props.activeChart === "marketCap" ? <MarketCaps /> : null}
            {props.activeChart === "financial" ? <FinancialsChart /> : null}
          </Suspense>
          <ChartSelector />
        </div>
        <div className="col s4">
          <StockSelector />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  null
)(ActiveChart);
