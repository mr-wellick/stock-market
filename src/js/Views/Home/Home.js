import React, { Component } from "react";
import { Form } from "../../Components";
import "./home.scss";

class Home extends Component{
    render(){
        return(
            <section>
                <Form placeholder="Enter a valid stock ticker: TSLA, NFLX, KO"/>
            </section>
        );
    }
}

export default Home;