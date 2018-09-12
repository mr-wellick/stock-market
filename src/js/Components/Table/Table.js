import React       from "react";
import PropTypes   from "prop-types";
import "./table.scss";

let Table = ({ assetsData }) => {

    let filteredData = assetsData.filter( item => item["type"] === "FETCH_SUCCESS" );

    return(
        <div className="section-data__container">
            <table className="stocks-table">
                <thead className="stocks-table__thead">
                    <tr>
                        <th>Stocks</th>
                        <th>Adjusted Close</th>
                        <th>Percent Change</th>
                    </tr>
                </thead>
                <tbody>
                {
                    filteredData.map( (item, index) =>
                        <tr key={ index }>
                            <td>{ item["processedData"]["symbol"] }</td>
                            <td>{ item["processedData"]["5. adjusted close"][0] }</td>
                            <td>{ item["processedData"]["percentChange"][0] }</td>
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
