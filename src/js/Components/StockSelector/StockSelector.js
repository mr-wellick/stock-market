import React from "react";
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
  const classNames = (activeIndex, index) =>
    activeIndex === index ? "collection-item active teal lighten-3" : "collection-item";

  return (
    <form>
      <h5>Portfolio Stocks</h5>
      <ul className="stock-selections-ul collection">
        {data.map((stock, index) => (
          <li key={stock.company.symbol} className={classNames(props.activeIndex, index)}>
            <label className="active-selection black-text">
              <input
                name="stock-list"
                type="radio"
                onChange={onChange}
                checked={activeIndex === index}
                value={index}
              />
              {stock.company.symbol}
            </label>
            <div className={`secondary-content ${stockTrend(stock)}`}>
              <span>{stock.quote.close}</span>
              <span className="delete-icon-container">
                <i
                  className="tiny material-icons black-text"
                  data-symbol={stock.company.symbol}
                  onClick={deleteStock}
                  role="radio"
                  aria-checked={activeIndex === index}
                >
                  delete
                </i>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </form>
  );
}

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  { setActiveIndex, deleteStock }
)(StockSelector);
