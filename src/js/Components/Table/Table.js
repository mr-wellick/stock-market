import React     from "react";
import PropTypes from "prop-types";
import "./table.scss";

const Table = (props) => {

    // Stock name and data
    let { stockName, stockData } = props.data;
    let convertDataIntoArray     = Object.entries(stockData).reverse();

    return(
        <table>
            <caption>{ stockName }</caption>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Open</th>
                    <th>Adjusted Close</th>
                </tr>
            </thead>
            <tbody>
                {
                    convertDataIntoArray.map( (item, index) =>
                        <tr key={ index }>
                            <td>{ item[0] }</td>
                            <td>{ item[1]["1. open"] }</td>
                            <td>{ item[1]["5. adjusted close"] }</td>
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
