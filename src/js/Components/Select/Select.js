import React, { Component } from "react";
import PropTypes            from "prop-types";
import "./select.scss";



class Select extends Component{
    render(){
        return(
            <form>
                <select>
                    <optgroup label={ this.props.label }>
                        {
                            this.props.stockDataTypes.map( (item, key) => 
                                <option key={ key } value={item[1]}>{ item[0] }</option>
                            )
                        }
                    </optgroup>
                </select>
            </form>
        );
    }
}

Select.propTypes = {
    label: PropTypes.string,
    stockDataTypes: PropTypes.array
};

export default Select;