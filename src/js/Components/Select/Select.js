import React               from "react";
import { Component }       from "react";
import PropTypes           from "prop-types";
import { selectFrequency } from "../../Redux/";
import { connect }         from "react-redux";
import "./select.scss";

class Select extends Component{
    static propTypes = {
        selectFrequency: PropTypes.func
    }

    onChange = (event) => {
        this.props.selectFrequency(event.target.value);
    }

    render(){
        return(
            <form onChange={ this.onChange } className="selection-form">
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
        );
    }
}

export default connect(null, { selectFrequency })(Select);
