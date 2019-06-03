import React from "react";
import { connect } from "react-redux";
import { useDimensions } from "../../_hooks/";
import { GEOMS } from "react-d3-ggplot";
import { Background } from "react-d3-ggplot";
import { XAxis } from "react-d3-ggplot";
import { YAxis } from "react-d3-ggplot";
import { XGrid } from "react-d3-ggplot";
import { YGrid } from "react-d3-ggplot";
import { Rects } from "react-d3-ggplot";
import { PlaceholderChart } from "../PlaceholderChart/";

const newNames = [
  "report",
  "t.r",
  "c.o.r",
  "g.p",
  "r.a.d",
  "s.g.a.a",
  "o.e",
  "o.i",
  "o.i.e.n",
  "ebit",
  "i.i",
  "p.i",
  "i.t",
  "m.i",
  "n.i",
  "n.i.b"
];

const FinancialsChart = props => {
  const { data, activeIndex } = props;
  const dimensions = useDimensions();

  if (!data[activeIndex].income.income) {
    return (
      <PlaceholderChart
        message={`There is no financial data available for ${data[activeIndex].company.symbol}`}
      />
    );
  }

  const formattedData = Object.entries(data[activeIndex].income.income[0])
    .map((item, index) => [newNames[index], item[1]])
    .map(item => ({
      x: item[0],
      y: item[1]
    }))
    .slice(1)
    .filter(item => item.y > 0);

  return (
    <GEOMS data={formattedData} aes={["x", "y"]} dimensions={dimensions}>
      <Background />
      <XGrid />
      <YGrid />
      <XAxis />
      <YAxis label=".2s" />
      <Rects fill="#f062" />
    </GEOMS>
  );
};

const mapStateToProps = state => {
  const { data, activeIndex } = state.iexDataReducer;

  return {
    data,
    activeIndex
  };
};

export default connect(
  mapStateToProps,
  null
)(FinancialsChart);
