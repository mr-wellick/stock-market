import React       from "react";
import PropTypes   from "prop-types";
import { connect } from "react-redux";
import { format }  from "d3-format";
import "./style.scss";

function FinancialsTable(props){
    if(props.data.length === 0)
        return null;

    return(
        <div className="card financials-table">
            {
                <table className="table">
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th>Report Date</th>
                            <th>Price</th>
                            <th>SO</th>
                            <th>MC</th>
                            <th>Cash</th>
                            <th>Debt</th>
                            <th>EV</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{ props.data[props.activeIndex].quote.symbol }</td>
                            <td>{ props.data[props.activeIndex].financials.financials[0].reportDate }</td>
                            <td>{ props.data[props.activeIndex].quote.close }</td>
                            <td>
                                {
                                    format(".2s")(
                                        props.data[props.activeIndex].stats.sharesOutstanding
                                    )
                                }
                            </td>
                            <td>
                                {
                                    format(".2s")(
                                        props.data[props.activeIndex].stats.marketcap
                                    )
                                }
                            </td>
                            <td>
                                {
                                    format(".2s")(
                                        props.data[props.activeIndex].financials.financials[0].totalCash
                                    )
                                }
                            </td>
                            <td>
                                {
                                    format(".2s")(
                                        props.data[props.activeIndex].financials.financials[0].totalDebt
                                    )
                                }
                            </td>
                            <td>
                                {
                                    format(".2s")(
                                        props.data[props.activeIndex].stats.marketcap -
                                        props.data[props.activeIndex].financials.financials[0].totalCash +
                                        props.data[props.activeIndex].financials.financials[0].totalDebt
                                    )
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    );
}

FinancialsTable.propTypes = {
    data: PropTypes.array,
    activeIndex: PropTypes.number
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(mapStateToProps, null)(FinancialsTable);
