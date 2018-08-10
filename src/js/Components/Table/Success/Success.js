import React     from "react";
import PropTypes from "prop-types";
import "./success.scss";

// Show table when data is retrieved
const Success = (props) => {
    // Get stock info
    let stockName = props.data[0][1]["2. Symbol"];
    let stockData = Object.entries(props.data[1][1]).reverse();

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
                    stockData.map( (item, index) =>
                        <tr key={ index }>
                            <td>{ item[0] }</td>
                            <td>{ item[1]["1. open"] }</td>
                            <td>{ item[1]["2. high"] }</td>
                            <td>{ item[1]["3. low"] }</td>
                            <td>{ item[1]["5. adjusted close"] }</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

Success.propTypes = {
    data: PropTypes.array
};

export default Success;
