import React from "react";
import { connect } from "react-redux";
import { setActiveChart } from "../../Redux/";
import { DownloadCSV } from "../DownloadCSV/";
import "./style.scss";

const ChartSelector = props => {
  const onChange = event => {
    props.setActiveChart(event.target.dataset.chartType);
  };

  if (props.data.length === 0) return null;

  return (
    <div className="active-chart-container">
      <form>
        <label>
          <input
            className="with-gap"
            type="radio"
            name="charts"
            data-chart-type="historical"
            onChange={onChange}
            checked={props.activeChart === "historical"}
          />
          <span>Historical</span>
        </label>
        <label>
          <input
            className="with-gap"
            type="radio"
            name="charts"
            data-chart-type="marketCap"
            onChange={onChange}
            checked={props.activeChart === "marketCap"}
          />
          <span>Market Cap</span>
        </label>
        <label>
          <input
            className="with-gap"
            type="radio"
            name="charts"
            data-chart-type="financial"
            onChange={onChange}
            checked={props.activeChart === "financial"}
          />
          <span>Income</span>
        </label>
      </form>
      <div>
        <DownloadCSV />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  { setActiveChart }
)(ChartSelector);
