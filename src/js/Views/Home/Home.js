import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { InputStock } from "../../Components/";
import { StockDescription } from "../../Components/";
import { ActiveChart } from "../../Components/";
import { StockNews } from "../../Components/";
import "./style.scss";

function Home() {
  return (
    <section>
      <InputStock />
      <ActiveChart />
      <StockDescription />
      <StockNews />
    </section>
  );
}

Home.propTypes = {
  data: PropTypes.array,
  isFetching: PropTypes.bool
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  null
)(Home);
