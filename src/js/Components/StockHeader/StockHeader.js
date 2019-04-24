import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";

function StockHeader(props) {
  if (props.data.length === 0) {
    return null;
  }

  const { data, activeIndex } = props;
  const isDown = data[activeIndex].quote.change < 0 ? "is-down" : "is-up";

  return (
    <div className="row">
      <div className="col s12">
        <div className="card-pannel">
          <p>
            <span className="company-name">{data[activeIndex].company.companyName}</span>
            <span className="company-symbol">[{data[activeIndex].company.symbol}]</span>
          </p>
          <p>
            <span className="company-close">{data[activeIndex].quote.close}</span>
            <span className={"company-change " + isDown}>
              {data[activeIndex].quote.change}({data[activeIndex].quote.changePercent})
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

StockHeader.propTypes = {
  data: PropTypes.array,
  activeIndex: PropTypes.number
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  null
)(StockHeader);
