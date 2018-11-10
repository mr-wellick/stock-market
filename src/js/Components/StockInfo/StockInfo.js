import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import "./stockInfo.scss";

class StockInfo extends Component {
    static propTypes = {
        successData: PropTypes.object,
        robinhoodData: PropTypes.object
    }

    render(){
        if(!this.props.successData || !this.props.robinhoodData)
            return null;

        return(
            <div className="table-container">
                <table>
                    <caption>
                            { this.props.successData["data"]["stockName"] }
                    </caption>
                    <thead>
                        <tr>
                            <th>Adjusted Close</th>
                            <th>S/O</th>
                            <th>MC</th>
                            <th>Percent Change</th>
                            <th>Frequency</th>
                            <th>Current Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{ `$${this.props.successData["data"]["adjustedClose"][0]}` }</td>
                            <td>
                                {
                                    Number(this.props.robinhoodData["shares_outstanding"])
                                        .toLocaleString("en-US")
                                }
                            </td>
                            <td>
                                {
                                    Number(this.props.robinhoodData["market_cap"])
                                        .toLocaleString("en-US", { style: "currency", currency: "USD" })
                                }
                            </td>
                            <td>{ `${this.props.successData["data"]["percentChange"][0]}%` }</td>
                            <td>{ this.props.successData["data"]["frequency"] }</td>
                            <td>{ this.props.successData["data"]["dates"][0] }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StockInfo;
