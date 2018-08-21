import React     from "react";
import PropTypes from "prop-types";
import "./form.scss";

const Form = (props) => {
    return(
        <div className="input-container">
            <form onSubmit={ props.onSubmit }>
                <input type="text" id="section__form-input" placeholder="Enter a valid ticker"/>
                <input type="submit" value="View"/>
            </form>
        </div>
    );
};

Form.propTypes = {
    onSubmit: PropTypes.func
};

export default Form;
