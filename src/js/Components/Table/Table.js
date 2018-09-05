import React       from "react";
import PropTypes   from "prop-types";
import "./table.scss";

let Table = (props) => {
    let { processedData }    = props;
    let { assetName, dates } = processedData;

    return(
        <div>
        <table className={ props.className }>
            <caption>{ assetName }</caption>
            <thead>
                <tr>
                    <th>Dates</th>
                    <th className="section-data__col">High</th>
                    <th className="section-data__col">Open</th>
                    <th className="section-data__col">Low</th>
                    <th>Adjusted Close</th>
                </tr>
            </thead>
            <tbody>
                {
                    dates.map( (item, index) =>
                        <tr key={ index }>
                            <td>{ item }</td>
                            <td className="section-data__row">{ processedData["1. open"][index] }</td>
                            <td className="section-data__row">{ processedData["2. high"][index] }</td>
                            <td className="section-data__row">{ processedData["3. low"][index] }</td>
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
