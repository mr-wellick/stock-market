import React, { Component } from "react";
import PropTypes            from "prop-types";
import "./form.scss";

class Form extends Component{
    render(){
        return(
            <form>
                <input type="text" placeholder={ this.props.placeholder }/>
                <input type="submit" value="View"/>
            </form>
        );
    }
}

Form.propTypes = {
    placeholder: PropTypes.string
};

export default Form;