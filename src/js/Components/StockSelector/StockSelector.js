import React              from "react";
import PropTypes          from "prop-types";
import { connect }        from "react-redux";
import { setActiveIndex } from "../../Redux/";
import "./style.scss";

function StockSelector(props){
    function onChange(event){
        props.setActiveIndex(Number(event.target.value));
    }

    return(
        <form className="active-stock__form">
        {
            props.data.length > 0
                ?
                    props.data.map( (item, index) => (
                        <div key={ index } className="active-stock__container">
                            <input
                                type="radio"
                                id={ item["company"]["symbol"] }
                                name="active-stock"
                                value={ index }
                                checked={ props.activeIndex === index }
                                onChange={ onChange }
                            />
                            <label htmlFor={ item["company"]["symbol"] }>
                                { item["company"]["symbol"] }
                            </label>
                        </div>
                    ))
                : null
        }
        </form>
    );
}

StockSelector.propTypes = {
    data: PropTypes.array,
    activeIndex: PropTypes.number,
    setActiveIndex: PropTypes.func
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(mapStateToProps, { setActiveIndex })(StockSelector);
