import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchIEXData } from "../../Redux/";
import { fetchIEXError } from "../../Redux/";
import { validate } from "../../_utilities/";
import { useSymbols } from "../../_hooks/";
import { SuggestionsBox } from "../SuggestionsBox/";
import "./style.scss";

const InputStock = props => {
  const [input, setInput] = useState("");
  const [matches, setMatches] = useState([]);
  const symbols = useSymbols();

  const onChange = event => {
    const validInput = validate(event.target.value);
    setInput(validInput);

    // clear any previous errors
    if (props.error !== "") {
      props.fetchIEXError("");
    }

    // when an incorrect input such as, SOME_ENTRY_THAT_IS_VALID_BUT_NOT_A_STOCK_TICKER, is entered,
    // we still get back a valid regex pattern. however, when we use this pattern to search the array,
    // we end up with no matches.
    const pattern = validInput ? new RegExp(`([^"]*${validInput}[^"]*)`, "g") : null;

    // returning an empty array when we don't have any matches just to stay consistent with initial state.
    const possibleStocksToQuery =
      pattern !== null && symbols.match(pattern) !== null ? symbols.match(pattern) : [];

    setMatches(possibleStocksToQuery);
  };

  const onSubmit = event => {
    event.preventDefault();
    setMatches([]); // clear suggestions
    document.querySelector("#stocks").value = ""; // clear user input

    // won't fetch duplicate entries
    const duplicateEntry = props.data.filter(item => item.company.symbol === input);

    if (duplicateEntry.length > 0) {
      props.fetchIEXError(`${duplicateEntry[0].company.symbol} is already in your list`);
    } else {
      // fetch stock market data from iex api
      if (input) {
        props.fetchIEXData(input);
      } else {
        props.fetchIEXError("Invalid input");
      }
    }
  };

  useEffect(() => {
    if (props.data.length === 0) {
      props.fetchIEXData("tsla");
    }
  }, []);

  const isError = props.error ? "is-error" : "";

  return (
    <div className="user-input-container">
      <form onSubmit={onSubmit} autoComplete="off">
        <div className="input-field">
          <input
            id="stocks"
            type="text"
            className="validate"
            placeholder="Search Stocks"
            onChange={onChange}
            required
          />
          <span className="helper-text" id={isError}>
            {props.error}
          </span>
        </div>
      </form>
      <SuggestionsBox matches={matches} setMatches={setMatches} />
    </div>
  );
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  { fetchIEXData, fetchIEXError }
)(InputStock);
