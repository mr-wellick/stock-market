import React         from "react";
import { Component } from "react";
import "./errors.scss";

class Errors extends Component {
    render(){
        if(!this.props.stockDataError)
            return null;

        const { stockDataError } = this.props;

        return(
            <div className="app-error">
                <p>{ stockDataError }</p>
                <a onClick={ this.onClick }>X</a>
            </div>
        );
    }
}

export default Errors;
