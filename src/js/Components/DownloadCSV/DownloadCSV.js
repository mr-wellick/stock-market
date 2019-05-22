import React from "react";
import { connect } from "react-redux";
import { CSVLink } from "react-csv";
import "./style.scss";

const DownloadCSV = props => {
  const stockNames = props.data.map(data => data.company.symbol);

  // get only date and change closing price name to stock name
  const allStocksClosingPrice = props.data.map((dataset, index) => {
    return dataset.chart.map(stock => ({
      date: stock.date,
      [`${stockNames[index]}`]: stock.close
    }));
  });

  const firstStock = allStocksClosingPrice[0];
  const remainingStocks = allStocksClosingPrice.slice(1);

  // add new stocks to first stock
  remainingStocks.forEach(item => {
    item.forEach((stock, index) => {
      firstStock[index] = { ...firstStock[index], ...stock };
    });
  });

  const headers = stockNames.map(stock => ({ label: stock, key: stock }));
  headers.push({ label: "Date", key: "date" });

  return (
    <CSVLink
      className="download-csv-btn"
      data={firstStock}
      headers={headers}
      filename="closing-prices.csv"
    >
      <i className="material-icons grey-text">file_download</i>
      <span>CSV</span>
    </CSVLink>
  );
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  null
)(DownloadCSV);
