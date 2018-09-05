import React       from "react";
import PropTypes   from "prop-types";
import "./table.scss";

let Table = (props) => {
    // Extract data
    let { processedData }    = props;
    let { assetName, dates } = processedData;

    return(
        <table>
            <caption>{ assetName }</caption>
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
                            <td>{ processedData["1. open"][index] }</td>
                            <td>{ processedData["2. high"][index] }</td>
                            <td>{ processedData["3. low"][index] }</td>
                            <td>{ processedData["5. adjusted close"][index] }</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

Table.propTypes = {
    processedData: PropTypes.object
};

export default Table;
