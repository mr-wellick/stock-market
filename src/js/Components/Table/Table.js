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
                    <thead className="stocks-table__thead">
                        <tr>
                            <th className="stocks-table__col">Stocks</th>
                            <th className="stocks-table__col">Price</th>
                            <th className="stocks-table__col--tablet">Open</th>
                            <th className="stocks-table__col--tablet-landscape">Low</th>
                            <th className="stocks-table__col--hide">High</th>
                            <th className="stocks-table__col">% Change</th>
                            <th className="stocks-table__col--mbl-landscape">Current Date</th>
                        </tr>
                    </thead>
                    <tbody className="stocks-table__tbody">
                    {
                        successData.map( (item, index) =>
                            <tr key={ index }>
                                <td>{ item["data"]["stockName"] }</td>
                                <td>{ item["data"]["adjustedClose"][0] }</td>
                                <td className="stocks-table__col--tablet">{ item["data"]["open"][0] }</td>
                                <td className="stocks-table__col--tablet-landscape">{ item["data"]["low"][0] }</td>
                                <td className="stocks-table__col--hide">{ item["data"]["high"][0] }</td>
                                <td>{ item["data"]["percentChange"][0] }</td>
                                <td className="stocks-table__col--mbl-landscape">{ item["data"]["dates"][0] }</td>
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
