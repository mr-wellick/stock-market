import React       from "react";
import PropTypes   from "prop-types";
import "./table.scss";

const Table = (props) => {

    let { stockName }              = props.name;
    let { stockData }              = props.data;
    let { error, errorMessage }    = props.data;
    let { open, high, low, close } = props.data;

    // If we have an error, log it. If we have no data, say so.
    if(error)
        return(<h1>{ errorMessage }</h1>);
    else if(stockData.length === 0)
        return(<h1>No data to display. Please enter a valid stock or crypto ticker: TSLA, BTC, ETH.</h1>);

    // Render stock or crypto data.
    return(
        <table>
            <caption>{ stockName }</caption>
            <thead>
                <tr>
                    <th>Dates</th>
                    <th>Open</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Close</th>
                </tr>
            </thead>
            <tbody>
                {
                    stockData.map( (item, index) =>
                        <tr key={ index }>
                            <td>{ item[0] }</td>
                            <td>{ open[index] }</td>
                            <td>{ high[index] }</td>
                            <td>{ low[index] }</td>
                            <td>{ close[index] }</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

Table.propTypes = {
    name: PropTypes.object,
    data: PropTypes.object
};

export default Table;
