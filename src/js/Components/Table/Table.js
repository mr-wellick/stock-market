import React     from "react";
import PropTypes from "prop-types";
import "./table.scss";

let Table = (props) => {
    // Get all data
    let { error, errorMessage, assetData } = props.fetchedData;
    let { processedData }                  = props.fetchedData;
    let assetName;
    let assetKeys;

    // If we have data, get asset name & variables to render
    if(assetData["Meta Data"])
    {
        assetName = assetData["Meta Data"]["2. Symbol"];
        assetKeys = Object.keys(processedData);
        console.log(Object.entries(processedData));
    }
    
    // If we have no data, alert user
    // Error is false on initial load.
    if(assetName === undefined && !error)
        return( <h2>No Stock Data</h2> );
    
    // If we have an error, show api documentation
    if(error)
        return( <h2>{ errorMessage }</h2> );

    // Render table on successful api call
    return(
        <table>
            <caption>{ assetName }</caption>
            <thead>
                <tr>
                    {
                        assetKeys.map( (item, index) => 
                            <th key={ index }>
                                { item.slice(2).toUpperCase() }
                            </th>
                        )
                    }
                </tr>
            </thead>
        </table>
    );
};

Table.propTypes = {
    fetchedData: PropTypes.object
};

export default Table;