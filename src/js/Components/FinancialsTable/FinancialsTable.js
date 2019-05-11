import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { format } from "d3-format";
import "./style.scss";

function FinancialsTable(props) {
  if (props.data.length === 0) {
    return null;
  }

  const { quote, stats } = props.data[props.activeIndex];

  return (
    <div className="card">
      {
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Close</th>
              <th>SO</th>
              <th>MC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{!quote.symbol ? "NA" : quote.symbol}</td>
              <td>{!quote.close ? "NA" : quote.close}</td>
              <td>{!stats.sharesOutstanding ? "NA" : format(".2s")(stats.sharesOutstanding)}</td>
              <td>{!stats.marketcap ? "NA" : format(".2s")(stats.marketcap)}</td>
            </tr>
          </tbody>
        </table>
      }
    </div>
  );
}

FinancialsTable.propTypes = {
  data: PropTypes.array,
  activeIndex: PropTypes.number
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  null
)(FinancialsTable);
