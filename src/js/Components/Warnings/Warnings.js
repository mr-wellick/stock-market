import React             from "react";
import { Component }     from "react";
import PropTypes         from "prop-types";
import { connect }       from "react-redux";
import { resetWarnings } from "../../Redux/";
import "./warnings.scss";

class Warnings extends Component{
    static propTypes = {
        resetWarnings: PropTypes.func
    }

    onClick = () => {
        this.props.resetWarnings();
    }

    render(){
        return(
            <div className="dialog-warning">
                <p>
                    <strong>Warning! </strong>
                    Can only retrieve a maximum of 4 stocks per minute.
                    Please wait.
                </p>
                <a onClick={ this.onClick }>x</a>
            </div>
        );
    }
}

export default connect(null, { resetWarnings })(Warnings);
