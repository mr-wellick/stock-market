import React     from "react";
import PropTypes from "prop-types";
import "./form.scss";

const Form = (props) => {
    return(
        <form onSubmit={ props.onSubmit } className="section__form">
            <input type="text" id="section__form-input" placeholder="Enter a stock ticker"/>
            <input type="submit" value="View" className="section__form-btn"/>
        </form>
    );
};

Form.propTypes = {
    onSubmit: PropTypes.func
};

export default Form;