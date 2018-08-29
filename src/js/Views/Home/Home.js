import React, { Component } from "react";
import { Form }             from "../../Components";
import { Select }           from "../../Components";
import "./home.scss";

class Home extends Component{
    render(){
        return(
            <section>
                <Select label="Stocks"/>
                <Form placeholder="Enter a valid stock ticker: TSLA, NFLX, KO"/>
            </section>
        );
    }
}

export default Home;