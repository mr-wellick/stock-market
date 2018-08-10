import React, { Component } from "react";
import { Form, Table }      from "../../Components";
//import { ScatterPlot }      from "../../Components";
//import { Histogram }        from "../../Components";
import { url, apiKey }      from "./api";
import "./home.scss";

class Home extends Component{
    state = {
        stockName: "TSLA",
        stockData: []
    }

    componentDidMount(){
        let defautlStockToRetrieve = `symbol=${this.state.stockName}&`;

        fetch(url + defautlStockToRetrieve + apiKey)
            .then(response => response.json())
            .then(data => this.setState({
                stockData: Object.entries(data)
            }));
    }

    onSubmit = (event) => {
        // Need variable for userInput.
        let userInput       = document.getElementById("section__form-input").value.toUpperCase();
        let stockToRetrieve = `symbol=${userInput}&`;

        if(userInput !== ""){
            // Retrieve stock data and update state.
            fetch( url + stockToRetrieve + apiKey )
                .then(response => response.json())
                .then(data => this.setState({
                    stockData: Object.entries(data)
                }));

            // Reset user form field
            document.getElementById("section__form-input").value = "";
        }

        // Prevent refresh of the page when submitting stock to view.
        event.preventDefault();
    }

    render(){
        return(
            <section>
                <Form onSubmit={ this.onSubmit }/>
                <Table data={ this.state.stockData }/>
                {/*<ScatterPlot
                    data={ this.state }
                    width="600"
                    height="400"
                    color="orange"
                />
                <Histogram
                    data={ this.state }
                    width={ 600 }
                    height={ 400 }
                    padding={ 1 }
                    scalar={ 15 }
                    color="crimson"
                />*/}
            </section>
        );
    }
}

export default Home;
