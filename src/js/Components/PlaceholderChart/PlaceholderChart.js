import React from "react";
import { useDimensions } from "../../_hooks/";

const PlaceholderChart = props => {
  const dimensions = useDimensions();

  return (
    <svg height={dimensions.height} width={dimensions.width}>
      <rect
        width={dimensions.width - dimensions.padding * 2}
        height={dimensions.height - dimensions.padding * 2}
        fill={"#f1f1f1"}
        transform={`translate(${dimensions.padding}, ${dimensions.padding})`}
      />
      <text x={dimensions.padding * 1.1} y={dimensions.height - dimensions.padding * 1.1}>
        {props.message}
      </text>
    </svg>
  );
};

export default PlaceholderChart;
