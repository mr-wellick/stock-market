import React, { Component } from "react";
import { Form }             from "../../Components/Form";
import { Table }            from "../../Components/Table";
import { Histogram }        from "../../Components/Histogram"; 
import { url, apiKey }      from "./api";
import "./home.scss";

class Home extends Component{

    state = {
        stockName: "TSLA",
        stockData: {}
    }

    componentDidMount(){
        let defautlStockToRetrieve = `symbol=${this.state.stockName}&`;

        fetch(url + defautlStockToRetrieve + apiKey)
            .then(response => response.json())
            .then(data => this.setState({
                stockData: data["Monthly Adjusted Time Series"]
            }));
    }

    onSubmit = (event) => {
        // Get new user input.
        let userInput = document.getElementById("section__form-input").value.toUpperCase();

        // Use default stock TSLA.
        if(userInput === "")
            userInput = this.state.stockName;

        // Parameter to retrieve data from api.
        let stockToRetrieve = `symbol=${userInput}&`;

        // Retrieve stock data and update state.
        fetch( url + stockToRetrieve + apiKey )
            .then(response => response.json())
            .then(data => this.setState({
                stockName: userInput,
                stockData: data["Monthly Adjusted Time Series"]
            }));

        // Prevent refresh of the page when submitting stock to view.
        event.preventDefault();

        // Reset user form field
        document.getElementById("section__form-input").value = "";
    }

    render(){
        return(
            <section className="section">
                <Form onSubmit={ this.onSubmit }/>
                <div className="section__table-style">
                    <Table data={ this.state }/>
                    <Histogram/>
                </div>
            </section>
        );
    }
}

export default Home;
