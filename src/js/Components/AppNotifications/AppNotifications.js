import React                   from "react";
import { Component }           from "react";
import { StockMarketConsumer } from "../../Context/stockMarketContext.js";
import "./appNotifications.scss";

class AppNotifications extends Component{
    static contextType = StockMarketConsumer;

    render(){
        const userStockEntry = this.context.duplicateEntry || this.context.errors;

        if(!userStockEntry)
            return null;

        return(
            <div className="app-notifications__container">
                <div className="app-notifications__card">
                    <p className="app-notifications__message">
                        {`The stock you entered, ${userStockEntry}, is incorrect or already in your list. Please, try again.`}
                    </p>
                    <button
                        className="app-notifications__btn"
                        onClick={ this.context.resetApplicationMessages }
                    >
                        &times;
                    </button>
                </div>
            </div>
        );
    }
}

export default AppNotifications;
