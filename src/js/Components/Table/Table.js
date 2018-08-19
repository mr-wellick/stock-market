import React       from "react";
import PropTypes   from "prop-types";
import "./table.scss";

const Table = (props) => {

    let { userInput, stockData } = props.data;

    // Display this for intial render
    if(stockData.stockData.length === 0)
        return(<h1>No stock data</h1>);

    // Render stock data.
    return(
        <table>
            <caption>{ userInput.stockName }</caption>
            <thead>
                <tr>
                    <th>Dates</th>
                    <th>Open</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Adjusted Close</th>
                </tr>
            </thead>
            <tbody>
                {
                    stockData.stockData.map( (item, index) =>
                        <tr key={ index }>
                            <td>{ item[0] }</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

Table.propTypes = {
    data: PropTypes.object
};

export default Table;
