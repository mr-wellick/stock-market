import React       from "react";
import PropTypes   from "prop-types";
import "./table.scss";

let Table = ({ assetsData }) => {

    let filteredData = assetsData.filter( item => item["type"] === "FETCH_SUCCESS" );

    return(
        <div className="section-data__container">
            <table className="stocks-table">
                <caption>{ filteredData[0]["processedData"]["dates"][0] }</caption>
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
                            {/* Don't know why adjusted close array is the only one being reversed but not the others??? */}
                            <td>{ item["processedData"]["5. adjusted close"].reverse()[0] }</td>
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
