import React       from "react";
import PropTypes   from "prop-types";
import "./table.scss";

const Table = (props) => {

    let { stockName }                             = props.data;
    let { errorMessage, errorData }               = props.data;
    let { dates, open, high, low, adjustedClose } = props.data;

    // Render error data.
    if(errorMessage)
        return(<h1>{ errorData }</h1>);

    // Render stock data.
    return(
        <table>
            <caption>{ stockName }</caption>
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
                    dates.map( (item, index) =>
                        <tr key={ index }>
                            <td>{ item }</td>
                            <td>{ open[index] }</td>
                            <td>{ high[index] }</td>
                            <td>{ low[index] }</td>
                            <td>{ adjustedClose[index] }</td>
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
