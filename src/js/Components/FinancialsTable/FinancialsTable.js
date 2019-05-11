import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { format } from "d3-format";
import "./style.scss";

function FinancialsTable(props) {
  if (props.data.length === 0) {
    return null;
  }

  const { quote, financials, stats } = props.data[props.activeIndex];

  return (
    <div className="card">
      {
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Report Date</th>
              <th>Close</th>
              <th>SO</th>
              <th>MC</th>
              <th>Cash</th>
              <th>Debt</th>
              <th>EV</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{quote.symbol}</td>
              <td>
                {financials.financials === undefined ? "NA" : financials.financials[0].reportDate}
              </td>
              <td>{!quote.close ? "NA" : quote.close}</td>
              <td>{!stats.sharesOutstanding ? "NA" : format(".2s")(stats.sharesOutstanding)}</td>
              <td>{!stats.marketcap ? "NA" : format(".2s")(stats.marketcap)}</td>
              <td>
                {!financials.financials[0].totalCash
                  ? "NA"
                  : format(".2s")(financials.financials[0].totalCash)}
              </td>
              <td>
                {!financials.financials[0].totalDebt
                  ? "NA"
                  : format(".2s")(financials.financials[0].totalDebt)}
              </td>
              <td>
                {!financials.financials[0].totalCash &&
                !financials.financials[0].totalDebt &&
                !stats.marketcap
                  ? "NA"
                  : format(".2s")(
                      stats.marketcap -
                        financials.financials[0].totalCash +
                        financials.financials[0].totalDebt
                    )}
              </td>
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
