import React         from "react";
import { Component } from "react";
import { MinRisk }   from "../../Components/";
import "./portfolio.scss";

class Portfolio extends Component{
    render(){
        return(
            <section className="portfolio">
                <MinRisk/>
            </section>
        );
    }
}

export default Portfolio;
