import React, { Component } from "react";
import PropTypes            from "prop-types";

class DataSelector extends Component{
    render(){
        return(
            <form>
                <label htmlFor="data_type_selector">Select stock or crypto mode</label>
                <select id="data_type_selector" onChange={ this.props.onChange }>
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

DataSelector.propTypes = {
    onChange: PropTypes.func
};

export default DataSelector;
