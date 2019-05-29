import React from "react";
import { connect } from "react-redux";
import "./style.scss";

const SmallLoader = props => {
  if (props.isFetching === false) {
    return null;
  }

  return (
    <div className="lrnz-small-loader">
      <div className="lrnz-small__block-1" />
      <div className="lrnz-small__block-2" />
      <div className="lrnz-small__block-3" />
      <div className="lrnz-small__block-4" />
    </div>
  );
};

const mapStateToProps = state => ({ isFetching: state.iexDataReducer.isFetching });

export default connect(
  mapStateToProps,
  null
)(SmallLoader);
