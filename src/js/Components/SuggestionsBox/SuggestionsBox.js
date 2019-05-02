import React from "react";

const SuggestionsBox = props => {
  let matches = [];

  if (props.matches !== null) {
    matches = props.matches.length < 200 ? props.matches : props.matches.slice(0, 200);
  }

  return (
    <div>
      {matches.map(symbol => (
        <div key={symbol}>{symbol}</div>
      ))}
    </div>
  );
};

export default SuggestionsBox;
