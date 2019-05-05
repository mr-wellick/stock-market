import React from "react";
import "./style.scss";

function SuggestionsBox(props) {
  if (props.matches.length === 0) {
    return null;
  }

  return (
    <form className="suggestions-box">
      {props.matches.map(symbol => (
        <p key={symbol}>
          <label>
            <input
              name="stocks"
              className="with-gap"
              type="radio"
              onChange={props.onSelectEntry}
              data-stock-name={symbol}
            />
            <span>{symbol}</span>
          </label>
        </p>
      ))}
    </form>
  );
}

export default SuggestionsBox;
