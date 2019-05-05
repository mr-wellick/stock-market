import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";

function StockDescription(props) {
  const { data, activeIndex } = props;

  if (data.length === 0) return null;

  return (
    <div className="card horizontal">
      <div className="card-image valign-wrapper">
        <img src={data[activeIndex].logo.url} alt="company logo" />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <h5>
            CEO:{" "}
            {data[activeIndex].company.CEO ? data[activeIndex].company.CEO : "Out for a jog..."}
          </h5>
          <p>
            {data[activeIndex].company.description === ""
              ? "Looks like there's nothing here to show..."
              : data[activeIndex].company.description}
          </p>
        </div>
        <div className="card-action">
          <a
            className="blue-text"
            href={
              data[activeIndex].company.website === "" ? null : data[activeIndex].company.website
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {data[activeIndex].company.symbol}
          </a>
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
