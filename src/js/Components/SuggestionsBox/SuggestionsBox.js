import React from "react";
import { connect } from "react-redux";
import { validate } from "../../_utilities/";
import { fetchIEXData } from "../../Redux/";
import { fetchIEXError } from "../../Redux/";
import { FixedSizeList } from "react-window";
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
    <div className="suggestions-box card">
      <ul className="collection" style={{ margin: 0 }}>
        <FixedSizeList
          height={175}
          itemCount={props.matches.length}
          itemSize={35}
          width="100%"
          itemData={props.matches}
          onChange={onChange}
        >
          {({ data, index, style }) => (
            <li className="collection-item suggestion-li" style={style}>
              <label className="black-text suggestion-label">
                <input
                  type="radio"
                  name="stock-suggestions"
                  data-stock-name={data[index]}
                  onChange={onChange}
                  value={index}
                />
                <div>
                  <span className="stand-out">{data[index].split(" - ")[0]}</span>
                  <span>{" - " + data[index].split(" - ")[1]}</span>
                </div>
              </label>
            </li>
          )}
        </FixedSizeList>
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({ data: state.iexDataReducer.data });

export default connect(
  mapStateToProps,
  { fetchIEXData, fetchIEXError }
)(SuggestionsBox);
