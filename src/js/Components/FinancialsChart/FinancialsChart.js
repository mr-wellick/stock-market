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
    // used to override GEOMS' iternals. will change.
    const Text = () => (
      <text x={dimensions.padding * 1.1} y={dimensions.height - dimensions.padding * 1.1}>
        There is no financial data available for {data[activeIndex].company.symbol}
      </text>
    );
    Text.displayName = "Text";

    return (
      <GEOMS data={[]} aes={[]} dimensions={dimensions}>
        <Background />
        <Text />
      </GEOMS>
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

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  null
)(FinancialsChart);
