import React       from "react";
import PropTypes   from "prop-types";
import "./table.scss";

let Table = ({ assetsData }) => {

    let filteredData = assetsData.filter( item => item["type"] === "FETCH_SUCCESS" );

    return(
        <div>
        <table className="stocks-table">
            <thead>
                <tr>
                    <th className="stocks-table__cols">Stocks</th>
                    <th className="stocks-table__cols">Price</th>
                    <th className="stocks-table__cols">% Change</th>
                    <th className="stocks-table__cols">Date</th>
                </tr>
            </thead>
            <tbody>
            {
                filteredData.map( (item, index) =>
                    <tr key={ index }>
                        <td>{ item["processedData"]["symbol"] }</td>
                        <td>{ item["processedData"]["adjustedClose"][0] }</td>
                        <td>{ item["processedData"]["percentChange"][0] }</td>
                        <td>{ item["processedData"]["dates"][0] }</td>
                    </tr>
                )
            }
            </tbody>
        </table>
        </div>
    );
};

Table.propTypes = {
    assetsData: PropTypes.array
};

export default Table;
