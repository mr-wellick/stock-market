import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { connect }   from "react-redux";
import "./table.scss";

class Table extends Component{
    render(){
        let { successData } = this.props;

        return(
            <div className="stocks-table__container">
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
    }
}

Table.propTypes = {
    successData: PropTypes.array
};

let mapState = (state) => {
    return {
        ...state.receivedData
    };
};

export default connect(mapState, null)(Table);
