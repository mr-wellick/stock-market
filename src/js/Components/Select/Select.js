import React         from "react";
import { Component } from "react";
import { Fragment }  from "react";
import "./select.scss";

class Select extends Component{
    render(){
        return(
            <Fragment>
                <form className="selection-form">
                    <div className="selection-form__monthly">
                        <input
                            type="radio"
                            id="monthly"
                            name="stock-type"
                            value="function=TIME_SERIES_MONTHLY_ADJUSTED&"
                            defaultChecked
                        />
                        <label htmlFor="monthly">Monthly</label>
                    </div>
                    <div className="selection-form__daily">
                        <input
                                type="radio"
                                id="daily"
                                name="stock-type"
                                value="function=TIME_SERIES_DAILY_ADJUSTED&"
                            />
                        <label htmlFor="daily">Daily</label>
                    </div>
                </form>

            </Fragment>
        );
    }
}

export default Select;