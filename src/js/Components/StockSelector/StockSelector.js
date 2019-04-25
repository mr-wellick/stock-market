import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setActiveIndex } from "../../Redux/";
import { deleteStock } from "../../Redux/";
import "./style.scss";

function StockSelector(props) {
  function onChange(event) {
    props.setActiveIndex(Number(event.target.value));
  }

  function deleteStock(event) {
    if (props.data.length === 1) {
      alert("You can't delete all stocks in your list!");
    } else {
      props.deleteStock(event.target.dataset.symbol);
      props.setActiveIndex(0);
    }
  }

  const { data, activeIndex } = props;

  if (data.length === 0) {
    return null;
  }

  const stockTrend = stock => (stock.quote.change < 0 ? "is-down" : "is-up");

  return (
    <form>
      <h4>Portfolio Stocks</h4>
      <ul className="collection">
        {data.map((stock, index) => {
          return (
            <li key={stock.company.symbol} className="collection-item">
              <i
                className="tiny material-icons"
                data-symbol={stock.company.symbol}
                onClick={deleteStock}
              >
                delete
              </i>
              <label>
                <input
                  className="with-gap"
                  type="radio"
                  name="stock-list"
                  checked={activeIndex === index}
                  onChange={onChange}
                  value={index}
                />
                <span>{stock.company.symbol}</span>
                <span className={`secondary-content ${stockTrend(stock)}`}>
                  {stock.quote.close}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </form>
  );
}

StockSelector.propTypes = {
  data: PropTypes.array,
  activeIndex: PropTypes.number,
  setActiveIndex: PropTypes.func,
  deleteStock: PropTypes.func
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  { setActiveIndex, deleteStock }
)(StockSelector);
