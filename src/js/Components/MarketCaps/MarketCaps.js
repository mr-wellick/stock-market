import React       from "react";
import PropTypes   from "prop-types";
import { connect } from "react-redux";
import { GGPLOT }  from "react-d3-ggplot";
import { Rects }   from "react-d3-ggplot";

function MarketCaps(props){
    const formatted = props.data.length > 0
        ? props.data.map(
            item => ({
                symbol: item.quote.symbol,
                marketCap: item.quote.marketCap
            })
        )
        : null;

    if(!formatted)
        return null;

    if(props.data.length < 2)
        return <h1 className="message" style={{ marginBottom: "50px" }}>Need at least two stocks.</h1>;

    return(
        <GGPLOT
            data={ formatted }
            aes={ ["symbol", "marketCap"] }
            dimensions={ props.dimensions }
        >
            <Rects/>
        </GGPLOT>
    );
}

MarketCaps.propTypes = {
    data: PropTypes.array,
    activeIndex: PropTypes.number,
    dimensions: PropTypes.object
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(mapStateToProps, null)(MarketCaps);
