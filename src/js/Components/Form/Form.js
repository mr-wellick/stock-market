import React, { Component } from "react";
import PropTypes            from "prop-types";
import { userInput }        from "../../Redux";
import { connect }          from "react-redux";
import "./form.scss";

class Form extends Component{
    onSubmit = (event) => {
        let assetName = document.querySelector("#user-input").value.toUpperCase();
        if(assetName !== "")
        {
            this.props.userInput(assetName);
            document.querySelector("#user-input").value = "";
        }
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={ this.onSubmit }>
                <input
                    type="text"
                    placeholder={ this.props.placeholder }
                    id="user-input"
                />
                <input type="submit" value="View"/>
            </form>
        );
    }
}

// Map state to props
let mapState = (state) => {
    return {
       ...state.assetName
    };
};

// Map dispatch to props
let mapDispatch = (dispatch) => {
    return {
        userInput: (assetName) => {
            dispatch(userInput(assetName));
        }
    };
};

// Prop type checking
Form.propTypes = {
    placeholder: PropTypes.string,
    userInput: PropTypes.func
};

export default connect(mapState, mapDispatch)(Form);