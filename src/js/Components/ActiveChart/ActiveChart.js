import React from "react";
import { connect } from "react-redux";
import { HistoricalChart } from "../HistoricalChart/";
import { MarketCaps } from "../MarketCaps/";
import { FinancialsChart } from "../FinancialsChart/";
import { StockHeader } from "../StockHeader/";
import { StockSelector } from "../StockSelector/";
import { ChartSelector } from "../ChartSelector/";
import "./style.scss";

function ActiveChart(props) {
  if (props.data.length === 0) {
    return null;
  }

  return (
    <div className="card chart-container">
      <div className="row">
        <div className="col s8">
          <StockHeader />
          {props.activeChart === "historical" ? <HistoricalChart /> : null}
          {props.activeChart === "marketCap" ? <MarketCaps /> : null}
          {props.activeChart === "financial" ? <FinancialsChart /> : null}
          <ChartSelector />
        </div>
        <div className="col s4">
          <StockSelector />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  null
)(ActiveChart);
