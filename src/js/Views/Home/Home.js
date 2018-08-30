import React, { Component } from "react";
import { Form }             from "../../Components";
import { Select }           from "../../Components";
import "./home.scss";

// Data types for stocks
let stockDataTypes = [
    ["Monthly Adjusted", "function=TIME_SERIES_MONTHLY_ADJUSTED&"],
    ["Daily Adjusted", "function=TIME_SERIES_DAILY_ADJUSTED&"]
];

class Home extends Component{
    render(){
        return(
            <section className="user__interaction">
                <Select
                    label="Stocks"
                    stockDataTypes={ stockDataTypes }
                />
                <Form placeholder="Enter ticker"/>
            </section>
        );
    }
}

export default Home;
