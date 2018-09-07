import React       from "react";
import PropTypes   from "prop-types";
import "./table.scss";

let Table = (props) => {
    let { processedData } = props;
    let {  dates }        = processedData;
    let assetName         = processedData.metaData["2. Symbol"];

    return(
        <div className="section-data__container">
            <table className="stocks-table">
                <caption>{ assetName }</caption>
                <thead className="stocks-table__thead">
                    <tr>
                        <th>Dates</th>
                        <th className="stocks-table__th--responsive">High</th>
                        <th className="stocks-table__th--responsive">Open</th>
                        <th className="stocks-table__th--responsive">Low</th>
                        <th>Adjusted Close</th>
                    </tr>
                </thead>
                <tbody className="stocks-table__tbody">
                    {
                        dates.map( (item, index) =>
                            <tr key={ index }>
                                <td>{ item }</td>
                                <td className="stocks-table__td--responsive">{ processedData["1. open"][index] }</td>
                                <td className="stocks-table__td--responsive">{ processedData["2. high"][index] }</td>
                                <td className="stocks-table__td--responsive">{ processedData["3. low"][index] }</td>
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
    processedData: PropTypes.object,
    className: PropTypes.string
};

export default Table;
