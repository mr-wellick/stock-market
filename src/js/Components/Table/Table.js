import React       from "react";
import PropTypes   from "prop-types";
import "./table.scss";

const Table = (props) => {

    let { stockName }           = props.name;
    let { stockData }           = props.data; 
    let { error, errorMessage } = props.data;

    if(error)
        return(<h1>{ errorMessage }</h1>);

    // Render stock data.
    return(
        <table>
            <caption>{ stockName }</caption>
            <thead>
                <tr>
                    <th>Dates</th>
                </tr>
            </thead>
            <tbody>
                {
                    stockData.map( (item, index) => 
                        <tr key={ index }>
                            <td>{ item[0] }</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

Table.propTypes = {
    data: PropTypes.object
};

export default Table;
