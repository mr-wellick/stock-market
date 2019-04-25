import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setActiveChart } from "../../Redux/";
import "./style.scss";

function ChartSelector(props) {
  const changeChart = event => {
    props.setActiveChart(event.target.id);
  };

  if (props.data.length === 0) return null;

  return (
    <form>
      <ul className="collection with-header">
        <li className="collection-header">
          <h5>Active Chart</h5>
        </li>
        <li className="collection-item">
          <label>
            <input
              className="with-gap"
              type="radio"
              id="historical"
              name="active-chart"
              defaultChecked
              onChange={changeChart}
            />
            <span>Historical</span>
          </label>
        </li>
        <li className="collection-item">
          <label>
            <input
              className="with-gap"
              type="radio"
              id="marketCaps"
              name="active-chart"
              onChange={changeChart}
            />
            <span>Market Cap</span>
          </label>
        </li>
        <li className="collection-item">
          <label className="field-chart">
            <input
              className="with-gap"
              type="radio"
              id="financials"
              name="active-chart"
              onChange={changeChart}
            />
            <span>Net Income</span>
          </label>
        </li>
      </ul>
    </form>
  );
}

ChartSelector.propTypes = {
  data: PropTypes.array,
  setActiveChart: PropTypes.func
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  { setActiveChart }
)(ChartSelector);
