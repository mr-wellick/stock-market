import React     from "react";
import PropTypes from "prop-types";
import "./table.scss";

const ShowTableData = (props) => {

    // Stock name and data
    let { stock, data }      = props.stockData;
    let convertDataIntoArray = Object.entries(data).reverse();

    return(
        <table>
            <caption>{ stock }</caption>
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

ShowTableData.propTypes = {
    stockData: PropTypes.object
};

export default ShowTableData;
