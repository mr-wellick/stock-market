import React, { Component } from "react";
import PropTypes            from "prop-types";
import { connect }          from "react-redux";
import { userInput }        from "../../Redux";
import { fetchData }        from "../../Redux";
import  uniq                from "lodash.uniq";
import "./input.scss";

class Input extends Component{
    onSubmit = (event) => {
        let assetNames = document.querySelector("#user-input").value.toUpperCase().trim();
        let singleWord = /([A-Z]+)/;

        if(assetNames !== "")
        {
            assetNames = assetNames.split(",");
            assetNames = assetNames.map(item => item.match(singleWord)[0]); // match() returns an array.
            assetNames = uniq(assetNames); // get unique entries only

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

export default connect(null, { userInput, fetchData })(Input);
