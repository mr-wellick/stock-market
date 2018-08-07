import React, { Component } from "react";
import { UserInput }        from "../../Components/UserInput";
import { ShowTableData }    from "../../Components/ShowTableData";
import { url, apiKey }      from "./api";
import "./home.scss";

class Home extends Component{

    state = {
        stock: "TSLA",
        data: {}
    }

    componentDidMount(){
        let defautlStockToRetrieve = `symbol=${this.state.stock}&`;

        fetch(url + defautlStockToRetrieve + apiKey)
            .then(response => response.json())
            .then(data => this.setState({
                data: data["Monthly Adjusted Time Series"]
            }));
    }

    onSubmit = (event) => {
        // Get new user input.
        let userInput = document.getElementById("section__form-input").value.toUpperCase();

        // Use default stock TSLA.
        if(userInput === "")
            userInput = this.state.stock;

        // Parameter to retrieve data from api.
        let stockToRetrieve = `symbol=${userInput}&`;

        // Retrieve stock data and update state.
        fetch( url + stockToRetrieve + apiKey )
            .then(response => response.json())
            .then(data => this.setState({
                stock: userInput,
                data: data["Monthly Adjusted Time Series"]
            }));

        // Prevent refresh of the page when submitting stock to view.
        event.preventDefault();

        // Reset user form field
        document.getElementById("section__form-input").value = "";
    }

    render(){
        return(
            <section className="section">
                <UserInput onSubmit={ this.onSubmit }/>
                <div className="section__table-style">
                    <ShowTableData stockData={ this.state }/>
                    <div>This is where the histogram will be placed.</div>
                </div>
            </section>
        );
    }
}

export default Home;
