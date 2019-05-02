import React from "react";
import "./style.scss";

const SuggestionsBox = props => {
  let matches;

  if (props.matches !== null) {
    matches = props.matches.length < 200 ? props.matches : props.matches.slice(0, 200);
  }

  if (matches === undefined || matches === null || matches.length === 0) {
    return null;
  }

  return (
    <div className="suggestions-box">
      <form>
        {matches.map(symbol => (
          <div key={symbol}>
            <input type="radio" id={symbol} />
            <label htmlFor={symbol}>{symbol}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default SuggestionsBox;
