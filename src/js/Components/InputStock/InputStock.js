import React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchIEXData } from "../../Redux/";
import { fetchIEXError } from "../../Redux/";
import { setUserInput } from "../../Redux/";
import { validate } from "../../_utilities/";
import { SuggestionsBox } from "../SuggestionsBox/";
import "./style.scss";

function InputStock(props) {
  const onChange = event => {
    const validInput = validate(event.target.value);
    props.setUserInput(validInput); // this pushes our validated user input into Redux.

    // clear any previous errors
    if (props.error !== "") {
      props.fetchIEXError("");
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    document.querySelector("#stocks").value = ""; // clear user input
    const validInput = props.input; // here, we access our validated user input pushed into state by `onChange`

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
      <SuggestionsBox />
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
  { fetchIEXData, fetchIEXError, setUserInput }
)(InputStock);
