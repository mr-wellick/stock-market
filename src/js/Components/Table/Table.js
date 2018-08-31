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
        <div className="api__data-container">
            <table className="api__data-table">
                <caption>{ assetName }</caption>
                <thead>
                    <tr>
                        <th>Dates</th>
                        <th>Open</th>
                        <th id="hide">High</th>
                        <th id="hide">Low</th>
                        <th>Adjusted Close</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dates.map( (item, index) => 
                            <tr key={ index }>
                                <td>{ item }</td>
                                <td>{ processedData["1. open"][index] }</td>
                                <td id="hide">{ processedData["2. high"][index] }</td>
                                <td id="hide">{ processedData["3. low"][index] }</td>
                                <td>{ processedData["5. adjusted close"][index] }</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

Table.propTypes = {
    fetchedData: PropTypes.object
};

export default Table;