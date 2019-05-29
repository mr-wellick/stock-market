import React from "react";
import { GEOMS } from "react-d3-ggplot";
import { Background } from "react-d3-ggplot";
import { useDimensions } from "../../_hooks/";

const PlaceholderChart = props => {
  const dimensions = useDimensions();

  // used to override GEOMS' iternals. will change.
  const Text = () => (
    <text x={dimensions.padding * 1.1} y={dimensions.height - dimensions.padding * 1.1}>
      {props.message}
    </text>
  );
  Text.displayName = "Text";

  return (
    <GEOMS data={[]} aes={[]} dimensions={dimensions}>
      <Background />
      <Text />
    </GEOMS>
  );
};

export default PlaceholderChart;
