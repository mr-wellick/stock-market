import React, { Component } from "react";
import PropTypes            from "prop-types";
import { connect }          from "react-redux";
import { userSelect }       from "../../Redux";

class SideBar extends Component{

    onChange = (event) => {
        let retrievalType = event.target.value;
        this.props.getData(retrievalType);
    }

    render(){
        return(
            <div className="selector-container">
                <form onChange={ this.onChange }>
                    <label htmlFor="selections">Choose stock or crypto mode</label>
                    <select id="selections">
                        <optgroup label="Stocks">
                            <option value="function=TIME_SERIES_MONTHLY_ADJUSTED&">Monthly Adjusted</option>
                            <option value="function=TIME_SERIES_DAILY_ADJUSTED&">Daily Adjusted</option>
                        </optgroup>
                        <optgroup label="Cryptocurrency">
                            <option value="function=DIGITAL_CURRENCY_MONTHLY&">Monthly</option>
                            <option value="function=DIGITAL_CURRENCY_DAILY&">Daily</option>
                        </optgroup>
                    </select>
                </form>
            </div>
        );
    }
}

let mapState = (state) => {
    return {
        selection: state.dataType
    };
};

let mapDispatch = (dispatch) => {
    return {
        getData: (type) => {
            dispatch(userSelect(type));
        }
    };
};

SideBar.propTypes = {
    getData: PropTypes.func
};

export default connect(mapState, mapDispatch)(SideBar);
