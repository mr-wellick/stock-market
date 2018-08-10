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
        let defautlStockToRetrieve = `symbol=${this.state.stockName}&`;

        fetch(url + defautlStockToRetrieve + apiKey)
            .then(response => response.json())
            .then(data => {
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
                    dates: dates,
                    open: open,
                    high: high,
                    low: low,
                    close: close,
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
            // Retrieve stock data and update state.
            fetch( url + stockToRetrieve + apiKey )
                .then(response => response.json())
                .then(data => {
                    // Get raw data.
                    let rawData = Object.entries(data);

                    // Check for error messages.
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
