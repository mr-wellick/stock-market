import React, { Component } from "react";

class DataSelector extends Component{
    // Pick crypto or stock mode.
    onChange = (event) => {
        let typeOfDataToRetrieve = event.target.value;

        // Dispatch an action to here to select data type.
        console.log(typeOfDataToRetrieve);
    }

    render(){
        return(
            <form>
                <label htmlFor="data_type_selector">Select stock or crypto mode</label>
                <select id="data_type_selector" onChange={ this.onChange }>
                    <optgroup label="Stock Market Data">
                        <option value="function=TIME_SERIES_MONTHLY_ADJUSTED">Monthly Adjusted</option>
                        <option value="function=TIME_SERIES_DAILY_ADJUSTED">Daily Adjusted</option>
                    </optgroup>
                    <optgroup label="Crytocurrency Data">
                        <option value="function=DIGITAL_CURRENCY_MONTHLY">Monthly</option>
                        <option value="function=DIGITAL_CURRENCY_DAILY">Daily</option>
                    </optgroup>
                </select>
            </form>
        );
    }
}

export default DataSelector;
