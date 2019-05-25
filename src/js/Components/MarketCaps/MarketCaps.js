import React from "react";
import { connect } from "react-redux";
import { GEOMS } from "react-d3-ggplot";
import { Background } from "react-d3-ggplot";
import { XGrid } from "react-d3-ggplot";
import { YGrid } from "react-d3-ggplot";
import { XAxis } from "react-d3-ggplot";
import { YAxis } from "react-d3-ggplot";
import { Rects } from "react-d3-ggplot";
import { useDimensions } from "../../_hooks/";

function MarketCaps(props) {
  const dimensions = useDimensions();

  const formatted =
    props.data.length > 0
      ? props.data.map(item => ({
          symbol: item.quote.symbol,
          marketCap: item.quote.marketCap
        }))
      : null;

  if (!formatted) return null;

  if (props.data.length < 2) {
    // used to override GEOMS' iternals. will change.
    const Text = () => (
      <text x={dimensions.padding * 1.1} y={dimensions.height - dimensions.padding * 1.1}>
        You need at least two stocks to correctly display this chart.
      </text>
    );
    Text.displayName = "Text";

    return (
      <GEOMS data={formatted} aes={["symbol", "marketCap"]} dimensions={dimensions}>
        <Background />
        <Text />
      </GEOMS>
    );
  }

  return (
    <GEOMS data={formatted} aes={["symbol", "marketCap"]} dimensions={dimensions}>
      <Background />
      <XGrid />
      <YGrid />
      <XAxis />
      <YAxis label=".2s" />
      <Rects fill="#22b2c7" />
    </GEOMS>
  );
}

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  null
)(MarketCaps);
