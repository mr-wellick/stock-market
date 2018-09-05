import React, { Component } from "react";
import PropTypes            from "prop-types";
import "./form.scss";

class Form extends Component{
    render(){
        return(
            <form onSubmit={ this.props.onSubmit }>
                <input type="text" placeholder={ this.props.placeholder } id="user-input"/>
                <button type="submit">VIEW</button>
            </form>
        );
    }
}


// Prop type checking
Form.propTypes = {
    onSubmit: PropTypes.func,
    placeholder: PropTypes.string,
};

export default Form;
