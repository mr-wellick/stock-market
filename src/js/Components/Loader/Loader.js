import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";

function Loader(props) {
  if (props.isFetching === false) return null;

  return (
    <div className="my-loader">
      <div className="my-loader__block1" />
      <div className="my-loader__block2" />
      <div className="my-loader__block3" />
      <div className="my-loader__block4" />
    </div>
  );
}

Loader.propTypes = {
  isFetching: PropTypes.bool
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  null
)(Loader);
