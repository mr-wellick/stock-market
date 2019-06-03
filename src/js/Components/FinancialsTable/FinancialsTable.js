import React from "react";
import { connect } from "react-redux";
import { format } from "d3-format";
import "./style.scss";

const FinancialsTable = props => {
  if (props.data.length === 0) {
    return null;
  }

  const { quote, stats } = props.data[props.activeIndex];
  const stockTrend = change => (change < 0 ? "is-down" : "is-up");

  return (
    <table className="centered">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Close</th>
          <th>Shares Outstanding</th>
          <th>Market Cap</th>
          <th>Week 52 High</th>
          <th>Week 52 Low</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{!quote.symbol ? "-" : quote.symbol}</td>
          <td className={stockTrend(quote.change)}>{!quote.close ? "-" : quote.close}</td>
          <td>{!stats.sharesOutstanding ? "-" : format(".2s")(stats.sharesOutstanding)}</td>
          <td>{!stats.marketcap ? "-" : format(".2s")(stats.marketcap)}</td>
          <td>{!quote.week52High ? "-" : quote.week52High}</td>
          <td>{!quote.week52Low ? "-" : quote.week52Low}</td>
        </tr>
      </tbody>
    </table>
  );
};

const mapStateToProps = state => {
  const { data, activeIndex } = state.iexDataReducer;

  return {
    data,
    activeIndex
  };
};

export default connect(
  mapStateToProps,
  null
)(FinancialsTable);
