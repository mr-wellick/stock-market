import React       from "react";
import PropTypes   from "prop-types";
import { connect } from "react-redux";
import { GGPLOT }  from "react-d3-ggplot";
import { Line }    from "react-d3-ggplot";

function HistoricalChart(props){
    // format data
    const formatted = props.data.length > 0
        ?
            props.data[props.activeIndex].chart.map(item => ({
                ...item,
                date: new Date(item.date)
            }))
        : null;

    if(!formatted)
        return null;

    return(
        <GGPLOT
            data={ formatted }
            aes={ ["date", "close"] }
            dimensions={ props.dimensions }
        >
            <Line color="orange"/>
        </GGPLOT>
    );
}

HistoricalChart.propTypes = {
    data: PropTypes.array,
    activeIndex: PropTypes.number,
    dimensions: PropTypes.object
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(mapStateToProps, null)(HistoricalChart);
