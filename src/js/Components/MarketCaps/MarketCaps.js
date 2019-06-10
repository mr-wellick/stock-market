import React from "react";
import { connect } from "react-redux";
import { GGPLOT } from "react-d3-ggplot";
import { Rects } from "react-d3-ggplot";
import { useDimensions } from "../../_hooks/";
import { PlaceholderChart } from "../PlaceholderChart/";

const MarketCaps = props => {
  const dimensions = useDimensions();

  const formatted =
    props.data.length > 0
      ? props.data.map(item => ({
          symbol: item.quote.symbol,
          marketCap: item.quote.marketCap
        }))
      : null;

  if (!formatted) {
    return <PlaceholderChart message="Something went horribly wrong." />;
  }

  if (props.data.length < 2) {
    return (
      <PlaceholderChart message="You need at least two stocks to correctly display this chart." />
    );
  }

  return (
    <GGPLOT data={formatted} aes={["symbol", "marketCap"]} dimensions={dimensions} y_format=".2s">
      <Rects fill="#a2ad66" />
    </GGPLOT>
  );
};

const mapStateToProps = state => ({ data: state.iexDataReducer.data });

export default connect(
  mapStateToProps,
  null
)(MarketCaps);
