import React, { Component }  from "react";
import { Form, Table }       from "../../Components";
import { LineChart }         from "../../Components";
//import { Histogram }        from "../../Components";
import { url, apiKey }       from "./api";
import { findPercentChange } from "./Utilities";
import "./home.scss";

class Home extends Component{
    state = {
        stockName: "TSLA",
        dates: [],
        open: [],
        high: [],
        low: [],
        close: [],
        adjustedClose: [],
        percentChange: [],
        errorMessage: false,
        errorData: ""
    }

    componentDidMount(){
        // Retrieve TSLA stock by default.
        let defautlStockToRetrieve = `symbol=${this.state.stockName}&`;

        // Get data and format into correct form before processing.
        let p1 = fetch(url + defautlStockToRetrieve + apiKey)
            .then(res => res.json())
            .then(data => Object.entries(data)[1][1]) // BUG. Sometimes it works other times it doesn't.
            .then(formattedData => Object.entries(formattedData).reverse());

        // Now process data.
        p1.then(data => {
            // Need to derive percentChange from adjustedClose.
            let adjustedClose = data.map( item => Number(item[1]["5. adjusted close"]).toFixed(2) );
            let percentChange = findPercentChange(adjustedClose);

            // Finally, update state.
            this.setState({
                dates:         data.map( item => item[0] ),
                open:          data.map( item => Number(item[1]["1. open"]).toFixed(2) ),
                high:          data.map( item => Number(item[1]["2. high"]).toFixed(2) ),
                low:           data.map( item => Number(item[1]["3. low"]).toFixed(2) ),
                close:         data.map( item => Number(item[1]["4. close"]).toFixed(2) ),
                adjustedClose: adjustedClose,
                percentChange: percentChange
            });
        });
    }

    onSubmit = (event) => {
        // Need variable for userInput.
        let userInput       = document.getElementById("section__form-input").value.toUpperCase();
        let stockToRetrieve = `symbol=${userInput}&`;

        if(userInput !== ""){
            // Retrieve stock data.
            let p2 = fetch( url + stockToRetrieve + apiKey ).then(response => response.json());

                // Process data.
                p2.then(data => {
                    // Get raw data.
                    let rawData = Object.entries(data);

                    if(rawData[0] !== undefined)
                    {
                        // Reset all state fields if error occurs.
                        if(rawData[0][0] === "Error Message")
                        {
                            this.setState({
                                stockName: "NO STOCK",
                                dates: [],
                                open: [],
                                high: [],
                                low: [],
                                close: [],
                                adjustedClose: [],
                                percentChange: [],
                                errorMessage: !this.state.errorMessage,
                                errorData: rawData[0][1]
                            });
                        }
                        else // Set state when successful call is made.
                        {
                            // Turn data into array.
                            let __data__ = Object.entries(data)[1][1];
                            __data__     = Object.entries(__data__).reverse();

                            // Store data in its own variable.
                            let dates         = __data__.map( item => item[0] );
                            let open          = __data__.map( item => Number(item[1]["1. open"]).toFixed(2) );
                            let high          = __data__.map( item => Number(item[1]["2. high"]).toFixed(2) );
                            let low           = __data__.map( item => Number(item[1]["3. low"]).toFixed(2) );
                            let close         = __data__.map( item => Number(item[1]["4. close"]).toFixed(2) );
                            let adjustedClose = __data__.map( item => Number(item[1]["5. adjusted close"]).toFixed(2) );
                            let percentChange = findPercentChange(adjustedClose);

                            // Finally, update state.
                            this.setState({
                                stockName: userInput,
                                dates: dates,
                                open: open,
                                high: high,
                                low: low,
                                close: close,
                                adjustedClose: adjustedClose,
                                percentChange: percentChange,
                                errorMessage: false,
                                errorData: ""
                            });
                        }
                    }
                });
            // Reset user form field.
            document.getElementById("section__form-input").value = "";
        }

        // Prevent refresh of the page when submitting stock to view.
        event.preventDefault();
    }

    render(){
        return(
            <section>
                <Form onSubmit={ this.onSubmit }/>
                <Table data={ this.state }/>
                <LineChart
                    errorMessage={ this.state.errorMessage }
                    xValues={ this.state.dates }
                    yValues={ this.state.adjustedClose }
                    width={ 600 }
                    height={ 400 }
                    color={ "orange" }
                    padding={ 55 }
                    percent={ false }
                />
                <LineChart
                    errorMessage={ this.state.errorMessage }
                    xValues={ this.state.dates }
                    yValues={ this.state.percentChange }
                    width={ 600 }
                    height={ 400 }
                    color={ "crimson" }
                    padding={ 55 }
                    percent={ true }
                />
                {/*
                <Histogram
                    data={ this.state }
                    width={ 600 }
                    height={ 400 }
                    padding={ 1 }
                    scalar={ 15 }
                    color="crimson"
                />
                */}
            </section>
        );
    }
}

export default Home;
