import React                  from "react";
import { Component }          from "react";
import { StockMarketConsumer } from "../../Context/stockMarketContext.js";
import "./duplicateEntry.scss";

class DuplicateEntry extends Component{
    static contextType = StockMarketConsumer;

    render(){
        if(!this.context.duplicateEntry)
            return null;

        return(
            <div className="app-notification__container">
                <div className="app-notification__card">
                    <p className="app-notifcation__duplicates">
                        {`${this.context.duplicateEntry} is already in your list`}
                    </p>
                    <button
                        className="app-notification__btn"
                        onClick={ this.context.resetApplicationMessages }
                        id="duplicateEntry"
                    >
                        &times;
                    </button>
                </div>
            </div>
        );
    }
}

export default DuplicateEntry;
