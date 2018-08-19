import React, { Component } from "react";
import { userSelect }       from "../../Redux";
import { connect }          from "react-redux";
import PropTypes            from "prop-types";


class DataSelector extends Component{
    // Pick crypto or stock mode.
    onChange = (event) => {
        let retievalType = event.target.value;
        this.props.setData(retievalType);
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

let mapStateToProps = (state) => {
    return {
        dataType: state.dataType
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        setData: (type) => {
            dispatch(userSelect(type));
        }
    };
};

DataSelector.propTypes = {
    setData: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(DataSelector);
