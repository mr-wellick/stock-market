import React from "react";
import { connect } from "react-redux";
import "./style.scss";

function StockHeader(props) {
  if (props.data.length === 0) {
    return null;
  }

  const { data, activeIndex } = props;
  const stockTrend = data[activeIndex].quote.change < 0 ? "is-down" : "is-up";

  return (
    <div className="stock-header-container card-pannel">
      <div>
        <span className="company-name">{data[activeIndex].company.companyName}</span>
        <span className="company-symbol">[{data[activeIndex].company.symbol}]</span>
      </div>
      <div>
        <span className="company-close">{data[activeIndex].quote.close}</span>
        <span className={"company-change " + stockTrend}>
          {data[activeIndex].quote.change}({data[activeIndex].quote.changePercent})
        </span>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  null
)(StockHeader);
