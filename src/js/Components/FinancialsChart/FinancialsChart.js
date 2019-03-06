import React       from "react";
import PropTypes   from "prop-types";
import { connect } from "react-redux";
import { GGPLOT }  from "react-d3-ggplot";
import { Line }    from "react-d3-ggplot";

function FinancialsChart(props){
    // format data
    const formatted = props.data.length > 0
        ?
            props.data[props.activeIndex].financials.financials.map(item => ({
                ...item,
                date: new Date(item.reportDate),
                netIncome: item.netIncome
            }))
        : null;

    if(!formatted)
        return null;

    return(
        <GGPLOT
            data={ formatted }
            aes={ ["date", "netIncome"] }
            dimensions={ props.dimensions }
        >
            <Line color="crimson"/>
        </GGPLOT>
    );
}

FinancialsChart.propTypes = {
    data: PropTypes.array,
    activeIndex: PropTypes.number,
    dimensions: PropTypes.object
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(mapStateToProps, null)(FinancialsChart);
