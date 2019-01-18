import React         from "react";
import PropTypes     from "prop-types";
import { Component } from "react";
import "./duplicateEntry.scss";

class DuplicateEntry extends Component{
    render(){
        if(!this.props.stockName)
            return null;

        const { stockName } = this.props;

        return(
            <div className="duplicate-entry">
                <p>
                    {
                        `Sorry! you have entered ${stockName}, a stock already in your list. Will not retrieve.`
                    }
                </p>
                <a onClick={ this.onClick }>X</a>
            </div>
        );
    }
}

export default DuplicateEntry;
