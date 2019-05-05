import React from "react";
import "./style.scss";

const SuggestionsBox = props => {
  let matches = [];

  // this is here so we can implement base functionality. Loading more than 200 entries is SLOW!
  // until we implement "load more on scroll" functionality, we need this here.
  if (props.matches !== null) {
    matches = props.matches.length < 200 ? props.matches : props.matches.slice(0, 200);
  }

  if (matches.length === 0) {
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
