import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useDimensions } from "../../_hooks/";
import { GGPLOT } from "react-d3-ggplot";
import { Line } from "react-d3-ggplot";

function FinancialsChart(props) {
  const dimensions = useDimensions();

  if (Object.keys(props.data[props.activeIndex].financials).length === 0) {
    return (
      <h1
        className="message"
        style={{
          width: "100%",
          display: "flex",
          height: "100px",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        No financial data.
      </h1>
    );
  }

  // format data
  const formatted = props.data[props.activeIndex].financials.financials
    .map(item => ({
      ...item,
      date: new Date(item.reportDate),
      netIncome: item.netIncome
    }))
    .filter(item => item.netIncome !== null);

  return (
    <GGPLOT data={formatted} aes={["date", "netIncome"]} dimensions={dimensions} y_lab={".2s"}>
      <Line />
    </GGPLOT>
  );
}

FinancialsChart.propTypes = {
  data: PropTypes.array,
  activeIndex: PropTypes.number,
  dimensions: PropTypes.object
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  null
)(FinancialsChart);
