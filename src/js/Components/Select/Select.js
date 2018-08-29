import React, { Component } from "react";
import "./select.scss";

class Select extends Component{
    render(){
        return(
            <form>
                <select>
                    <optgroup label={ this.props.label }>
                        <option value="function=TIME_SERIES_MONTHLY_ADJUSTED&">Monthly Adjusted</option>
                        <option value="function=TIME_SERIES_DAILY_ADJUSTED&">Daily Adjusted</option>
                    </optgroup>
                </select>
            </form>
        );
    }
}

export default Select;