import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchIEXData } from "../../Redux/";
import { fetchIEXError } from "../../Redux/";
import { useSymbols } from "../../_hooks/";
import { SuggestionsBox } from "../SuggestionsBox/";
import "./style.scss";

function validate(userInput) {
  const singleWord = /\w+/;
  const isValidInput = userInput.match(singleWord);

  if (isValidInput !== null) {
    return isValidInput[0].toUpperCase();
  }

  return isValidInput;
}

function InputStock(props) {
  const [input, setInput] = useState("");
  const symbols = useSymbols();
  const [matches, setMatches] = useState([]);

  const onSelectEntry = event => {
    const validInput = validate(event.target.dataset.stockName);

    // clear user input
    document.querySelector("#stocks").value = "";
    setMatches([]);

    // won't fetch duplicate entries
    const duplicateEntry = props.data.filter(item => item.company.symbol === validInput);

    if (duplicateEntry.length > 0) {
      props.fetchIEXError(`${validInput} is already in your list`);
    } else {
      // fetch stock market data from iex api
      if (validInput) {
        props.fetchIEXData(validInput);
      } else {
        props.fetchIEXError("Invalid input");
      }
    }
  };

  const onChange = event => {
    setInput(event.target.value);

    // clear any previous errors
    if (props.error !== "") {
      props.fetchIEXError("");
    }

    // validate user input
    const validInput = validate(event.target.value);

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
    document.querySelector("#stocks").value = ""; // clear user input
    setMatches([]);

    const validInput = validate(input);

    // won't fetch duplicate entries
    const duplicateEntry = props.data.filter(item => item.company.symbol === validInput);

    if (duplicateEntry.length > 0) {
      props.fetchIEXError(`${validInput} is already in your list`);
    } else {
      // fetch stock market data from iex api
      if (validInput) {
        props.fetchIEXData(validInput);
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
          <span className="helper-text" data-error="wrong" data-success="right">
            {props.error}
          </span>
        </div>
      </form>
      <SuggestionsBox matches={matches} onSelectEntry={onSelectEntry} />
    </div>
  );
}

InputStock.propTypes = {
  className: PropTypes.string,
  fetchIEXData: PropTypes.func,
  data: PropTypes.array
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  { fetchIEXData, fetchIEXError }
)(InputStock);
