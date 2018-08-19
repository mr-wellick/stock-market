import React       from "react";
import PropTypes   from "prop-types";
import "./table.scss";

const Table = (props) => {

    let { userInput, stockData } = props.data;

    // Render stock data.
    return(
        <table>
            <caption>{ userInput.stockName }</caption>
            <thead>
                <tr>
                    <th>Dates</th>
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
