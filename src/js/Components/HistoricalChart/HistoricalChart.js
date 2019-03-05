import React        from "react";
import { useState } from "react";
import PropTypes    from "prop-types";
import { connect }  from "react-redux";
import { GGPLOT }   from "react-d3-ggplot";
import { Line }     from "react-d3-ggplot";

function HistoricalChart(props){
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        padding: 50
    });

    // format data
    const formatted = props.data.length > 0
        ?
            props.data[props.activeIndex].chart.map(item => ({
                ...item,
                date: new Date(item.date)
            }))
        : null;

    return(
        <div className="card">
            {
                formatted
                ?
                    <GGPLOT
                        data={ formatted }
                        aes={ ["date", "close"] }
                        dimensions={ dimensions }
                    >
                    </GGPLOT>
                :
                    <h1>No Chart</h1>
            }
        </div>
    );
}

HistoricalChart.propTypes = {
    data: PropTypes.array,
    activeIndex: PropTypes.number
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(mapStateToProps, null)(HistoricalChart);
