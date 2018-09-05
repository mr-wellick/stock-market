import React       from "react";
import PropTypes   from "prop-types";
import { Loading } from "../Loading";
import { Error }   from "../Error";
import "./table.scss";

let Table = (props) => {
    // Get all data
    let { isFetching }                         = props;
    let { processedData, error, errorMessage } = props.fetchedData;
    let { assetName, dates }                   = processedData;

    // Tell user we have no data. Error is false on initial render
    //if(processedData["assetName"] === undefined && !error)
    //    return <h2>No data</h2>;
    // Show loading status when fetching data
    if(isFetching || processedData["assetName"] === undefined)
        return <Loading/>;
    // Show error message
    else if(error)
        return <Error errorMessage={ errorMessage }/>;

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
    fetchedData: PropTypes.object,
    isFetching: PropTypes.bool
};

export default Table;
