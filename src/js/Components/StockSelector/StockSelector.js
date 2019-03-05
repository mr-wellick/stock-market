import React       from "react";
import { connect } from "react-redux";
import "./style.scss";

function StockSelector(props){
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
                                onChange={ null }
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

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(mapStateToProps, null)(StockSelector);
