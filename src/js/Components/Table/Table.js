import React       from "react";
import PropTypes   from "prop-types";
import "./table.scss";

let Table = ({ successData }) => {

    return(
        <div>
        <table className="stocks-table">
            <thead>
                <tr>
                    <th className="stocks-table__cols">Stocks</th>
                    <th className="stocks-table__cols">Price</th>
                    <th className="stocks-table__cols">% Change</th>
                    <th className="stocks-table__cols--hide">Date</th>
                </tr>
            </thead>
            <tbody>
            {
                successData.map( (item, index) =>
                    <tr key={ index }>
                        <td>{ item["processedData"]["symbol"] }</td>
                        <td>{ item["processedData"]["adjustedClose"][0] }</td>
                        <td>{ item["processedData"]["percentChange"][0] }</td>
                        <td className="stocks-table__cols--hide">{ item["processedData"]["dates"][0] }</td>
                    </tr>
                )
                }
            </tbody>
        </table>
        </div>
    );
};

Table.propTypes = {
    successData: PropTypes.array
};

export default Table;
