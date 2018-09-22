import React, { Component } from "react";
import PropTypes            from "prop-types";
import { connect }          from "react-redux";
import { userInput }        from "../../Redux";
import { fetchData }        from "../../Redux";
import "./input.scss";

class Input extends Component{
    onSubmit = (event) => {
        // Get assetNames and turn into array
        let assetNames = document.querySelector("#user-input").value.toUpperCase().trim();
        let singleWord = /([A-Z]+)/;

        if(assetNames !== "")
        {
            assetNames = assetNames.split(",");
            assetNames = assetNames.map(item => item.match(singleWord)[0]); // match() returns an array.

            this.props.userInput(assetNames);
            this.props.fetchData(assetNames);
            document.querySelector("#user-input").value = "";
        }

        // If user only enters spaces, clear form only
        document.querySelector("#user-input").value = "";
        event.preventDefault();
    }

    render(){
        return(
            <form  className="form-input" onSubmit={ this.onSubmit }>
                <input className="form-input__text" type="text" placeholder="Enter stock(s)" id="user-input"/>
                <button className="form-input__btn" type="submit">VIEW</button>
            </form>
        );
    }
}

Input.propTypes = {
    userInput: PropTypes.func,
    fetchData: PropTypes.func
};

let mapProps = (dispatch) => {
     return {
        userInput: (assetNames) => {
            dispatch(userInput(assetNames));
        },
        fetchData: (assetNames) => {
            dispatch(fetchData(assetNames));
        }
    };
};

export default connect(null, mapProps)(Input);
