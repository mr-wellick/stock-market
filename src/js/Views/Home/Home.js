import React from "react";
import { InputStock } from "../../Components/";
import { StockDescription } from "../../Components/";
import { ActiveChart } from "../../Components/";
import { StockNews } from "../../Components/";
import { FinancialsTable } from "../../Components/";
import { Footer } from "../../Components/";
import "./style.scss";

const Home = () => {
  return (
    <section>
      <InputStock />
      <FinancialsTable />
      <ActiveChart />
      <StockDescription />
      <StockNews />
      <Footer />
    </section>
  );
};

export default Home;
