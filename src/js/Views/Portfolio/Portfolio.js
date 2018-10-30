import React               from "react";
import { Component }       from "react";
import { RiskReturnChart } from "../../Components/";
import "./portfolio.scss";

class Portfolio extends Component{
    render(){
        return(
            <section className="portfolio">
                <RiskReturnChart/>
            </section>
        );
    }
}

export default Portfolio;
