import React from "react";
import { connect } from "react-redux";
import { InputStock } from "../../Components/";
import { StockDescription } from "../../Components/";
import { ActiveChart } from "../../Components/";
import { StockNews } from "../../Components/";
import { FinancialsTable } from "../../Components/";
import { Footer } from "../../Components/";
import "./style.scss";

const Home = props => {
  return (
    <section className={props.data.length === 0 ? "fill-viewport" : ""}>
      <InputStock />
      <FinancialsTable />
      <ActiveChart />
      <StockDescription />
      <StockNews />
      {props.data.length === 0 ? null : <Footer />}
    </section>
  );
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  null
)(Home);
