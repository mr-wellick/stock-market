import React, { Component } from "react";
import PropTypes            from "prop-types";
import "./form.scss";

class Form extends Component{
    render(){
        return(
            <div className="user__form-container">
                <form onSubmit={ this.props.onSubmit } className="user__form">
                    <input
                        type="text"
                        placeholder={ this.props.placeholder }
                        id="user-input"
                        className="user__form-input"
                    />
                    <button
                        type="submit"
                        className="user__form-submit"
                    >
                       VIEW
                    </button>
                </form>
            </div>
        );
    }
}


// Prop type checking
Form.propTypes = {
    onSubmit: PropTypes.func,
    placeholder: PropTypes.string
};

export default Form;
