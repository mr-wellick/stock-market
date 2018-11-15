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

        let { successData, robinhoodData } = this.props;

        return(
            <div className="table-container">
                <table>
                    <caption>
                            { successData["stockName"] }
                    </caption>
                    <thead>
                        <tr>
                            <th>Adjusted Close</th>
                            <th>S/O</th>
                            <th>MC</th>
                            <th>Percent Change</th>
                            <th>Frequency</th>
                            <th>Current Month</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {
                                    Number(successData["adjustedClose"][0])
                                        .toLocaleString("en-US", { style: "currency", currency: "USD" })
                                }
                            </td>
                            <td>
                                {
                                    Number(robinhoodData["shares_outstanding"])
                                        .toLocaleString("en-US")
                                }
                            </td>
                            <td>
                                {
                                    Number(robinhoodData["market_cap"])
                                        .toLocaleString("en-US", { style: "currency", currency: "USD" })
                                }
                            </td>
                            <td>{ successData["percentChange"][0] }</td>
                            <td>{ successData["frequency"] }</td>
                            <td>{ successData["dates"][0] }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StockInfo;
