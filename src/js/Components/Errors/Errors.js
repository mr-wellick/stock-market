import React           from "react";
import { Component }   from "react";
import PropTypes       from "prop-types";
import { connect }     from "react-redux";
import { resetErrors } from "../../Redux/";
import "./errors.scss";

class Errors extends Component{
    static propTypes = {
        resetErrors: PropTypes.func
    }

    onClick = () => {
        this.props.resetErrors();
    }

    render(){
        return(
            <div className="dialog-error">
                <p>
                    <strong>Error! </strong>
                    Entered incorrect stock(s).
                </p>
                <a
                    onClick={ this.onClick }
                    className="dialog-error__toggler"
                >X</a>
            </div>
        );
    }
}

export default connect(null, { resetErrors })(Errors);
