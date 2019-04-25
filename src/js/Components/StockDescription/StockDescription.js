import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";

function StockDescription(props) {
  const { data, activeIndex } = props;

  if (data.length === 0) return null;

  return (
    <div className="row">
      <div className="col s12">
        <h2 className="header">
          CEO: {data[activeIndex].company.CEO ? data[activeIndex].company.CEO : "No CEO"}
        </h2>
        <div className="card horizontal">
          <div className="card-image valign-wrapper">
            <img src={data[activeIndex].logo.url} alt="company logo" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p className="">{data[activeIndex].company.description}</p>
            </div>
            <div className="card-action">
              <a
                className="blue-text"
                href={data[activeIndex].company.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data[activeIndex].company.symbol}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

StockDescription.propTypes = {
  data: PropTypes.array,
  activeIndex: PropTypes.number
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  null
)(StockDescription);
