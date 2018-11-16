import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import "./stockMetrics.scss";

class StockMetrics extends Component {
    static propTypes = {
        stockData: PropTypes.object
    }

    render(){
        if(!this.props.stockData)
            return null;

        let { quote, stats } = this.props.stockData;

        return(
            <div className="table-container">
                <table>
                    <caption>
                        { quote["symbol"] }
                    </caption>
                    <thead>
                        <tr>
                            <th>Closing Price</th>
                            <th>S/O</th>
                            <th>MC</th>
                            <th>Percent Change</th>
                            <th>Latest Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            {
                                quote["close"]
                                    .toLocaleString("en-US", { style: "currency", currency: "USD" })
                            }
                            </td>
                            <td>{ stats["sharesOutstanding"].toLocaleString("en-US") }</td>
                            <td>
                            {
                                quote["marketCap"]
                                    .toLocaleString("en-US", { style: "currency", currency: "USD" })
                            }
                            </td>
                            <td>{ quote["changePercent"]*100 + "%" }</td>
                            <td>{ quote["latestTime"] }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StockMetrics;