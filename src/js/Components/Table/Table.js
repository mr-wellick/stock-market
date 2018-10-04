import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { connect }   from "react-redux";
import "./table.scss";

class Table extends Component{

    static propTypes = {
        successData: PropTypes.array
    }

    render(){
        let { successData } = this.props;

        if(successData.length === 0)
            return null;

        return(
            <div className="stocks-table__container">
                <table className="stocks-table">
                    <thead>
                        <tr>
                            <th className="stocks-table__col">Stocks</th>
                            <th className="stocks-table__col">Price</th>
                            <th className="stocks-table__col">Open</th>
                            <th className="stocks-table__col">Low</th>
                            <th className="stocks-table__col">High</th>
                            <th className="stocks-table__col">% Change</th>
                            <th className="stocks-table__col">Current Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        successData.map( (item, index) =>
                            <tr key={ index }>
                                <td>{ item["data"]["symbol"] }</td>
                                <td>{ item["data"]["adjustedClose"][0] }</td>
                                <td className="stocks-table__col">
                                    { item["data"]["open"][0] }
                                </td>
                                <td className="stocks-table__col">
                                    { item["data"]["low"][0] }
                                </td>
                                <td className="stocks-table__col">
                                    { item["data"]["high"][0] }
                                </td>
                                <td>{ item["data"]["percentChange"][0] }</td>
                                <td className="stocks-table__col">
                                    { item["data"]["dates"][0] }
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

let mapState = (state) => {
    return {
        ...state.fetchData
    };
};

export default connect(mapState, null)(Table);
