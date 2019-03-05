import React              from "react";
import PropTypes          from "prop-types";
import { connect }        from "react-redux";
import { setActiveIndex } from "../../Redux/";
import { deleteStock }    from "../../Redux/";
import "./style.scss";

function StockSelector(props){
    function onChange(event){
        props.setActiveIndex(Number(event.target.value));
    }

    function deleteStock(event){
        props.deleteStock(event.target.dataset.symbol);
        props.setActiveIndex(0);
    }

    return(
        <div className="card stocks-list">
            <form className="active-form">
                {
                    props.data.length > 0
                        ?
                        props.data.map( (item, index) => (
                            <div key={ index } className="toggler-container">
                                <a
                                    className="delete is-small"
                                    onClick={ deleteStock }
                                    data-symbol={ item["company"]["symbol"] }
                                >
                                </a>
                                <div className="field-container">
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
                                    <div>
                                        { item["quote"]["close"] }
                                    </div>
                                </div>
                            </div>
                        ))
                        : <h1 className="message">No Stocks</h1>
                }
            </form>
        </div>
    );
}

StockSelector.propTypes = {
    data: PropTypes.array,
    activeIndex: PropTypes.number,
    setActiveIndex: PropTypes.func,
    deleteStock: PropTypes.func
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(mapStateToProps, { setActiveIndex, deleteStock })(StockSelector);
