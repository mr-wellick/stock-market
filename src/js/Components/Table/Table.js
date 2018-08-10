import React       from "react";
import PropTypes   from "prop-types";
import { Errors }  from "./Errors";
import { Success } from "./Success";
import "./table.scss";

const Table = (props) => {
    // Store data
    let stockData = props.data;

    // Make sure we have data
    if(stockData[0] !== undefined){
        if(stockData[0][0] === "Error Message"){
            return(
                <Errors error={ stockData }/>
            );
        }
        else{
            return(
                <Success data={ stockData }/>
            );
        }
    }
    return(null);
};

Table.propTypes = {
    data: PropTypes.array
};

export default Table;
