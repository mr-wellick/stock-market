import React from "react";
import { connect } from "react-redux";
import "./style.scss";

function StockDescription(props) {
  const { data, activeIndex } = props;

  if (data.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Description</span>
              <p>{data[activeIndex].company.description}</p>
            </div>
            <div className="card-action">
              <a href={data[activeIndex].company.website}>{data[activeIndex].company.symbol}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  null
)(StockDescription);
