import React, { Component } from "react";
import PropTypes            from "prop-types";
import "./form.scss";

class Form extends Component{
    render(){
        return(
            <form onSubmit={ this.props.onSubmit } className="section__form">
                <input type="text" id="section__form-input" placeholder="Enter a stock ticker"/>
                <input type="submit" value="View" className="section__form-btn"/>
            </form>
        );
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func
};

export default Form;
