import React from "react";
import { connect } from "react-redux";
import { validate } from "../../_utilities/";
import { fetchIEXData } from "../../Redux/";
import { fetchIEXError } from "../../Redux/";
//import { setUserInput } from "../../Redux/";
import "./style.scss";

const SuggestionsBox = props => {
  const onChange = event => {
    // clear matches on selection
    props.setMatches([]);
    document.querySelector("#stocks").value = ""; // clear user input

    const validInput = validate(event.target.dataset.stockName);
    const duplicateEntry = props.data.filter(item => item.company.symbol === validInput);

    if (duplicateEntry.length > 0) {
      props.fetchIEXError(`${duplicateEntry[0].company.symbol} is already in your list.`);
    } else {
      if (validInput) {
        props.fetchIEXData(validInput);
      } else {
        props.fetchIEXError("Invalid input.");
      }
    }
  };

  if (props.matches.length === 0) {
    return null;
  }

  return (
    <form className="suggestions-box card">
      <ul className="collection" style={{ margin: 0 }}>
        {props.matches.slice(0, 150).map((symbol, index) => (
          <li key={symbol} className="collection-item suggestion-li">
            <label className="black-text suggestion-label">
              <input
                type="radio"
                name="stock-suggestions"
                data-stock-name={symbol}
                onChange={onChange}
                value={index}
              />
              <div>
                <span className="stand-out">{symbol.split(" - ")[0]}</span>
                <span>{" - " + symbol.split(" - ")[1]}</span>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </form>
  );
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  { fetchIEXData, fetchIEXError }
)(SuggestionsBox);
