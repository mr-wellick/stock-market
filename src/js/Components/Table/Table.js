import React     from "react";
import PropTypes from "prop-types";
import "./table.scss";

let Table = (props) => {
    // Get all data
    let { error, errorMessage } = props.fetchedData;
    let { processedData }       = props.fetchedData;
    let { assetName, dates }    = processedData;

    // If no data, tell user to enter an asset
    // Error is false on initial render
    if(assetName === undefined && !error)
        return( <h2>No Stock Data</h2> );
    else if(error)
        return( <h2>{ errorMessage }</h2> );

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
                    <th>Volume</th>
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
                            <td>{ processedData["6. volume"][index] }</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

Table.propTypes = {
    fetchedData: PropTypes.object
};

export default Table;