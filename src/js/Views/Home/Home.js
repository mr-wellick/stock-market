import React, { Component } from "react";
import { Form } from "../../Components";
import "./home.scss";

class Home extends Component{
    render(){
        return(
            <section className="section-home">
                <Form/>
            </section>
        );
    }
}

export default Home;
