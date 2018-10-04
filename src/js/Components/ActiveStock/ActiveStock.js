import React           from "react";
import { Component }   from "react";
import PropTypes       from "prop-types";
import "./activeStock.scss";

class ActiveStock extends Component{
    static propTypes = {
        successData: PropTypes.array,
        onChange: PropTypes.func
    }

    render(){
        let { successData } = this.props;

        if(successData.length === 0)
            return null;

        return(
            <form onChange={ this.props.onChange } className="form-active">
                <div>
                    <input
                        type="radio"
                        id={ successData[0]["data"]["symbol"] }
                        name="active-stock"
                        value={ 0 }
                        defaultChecked
                    />
                    <label htmlFor={ successData[0]["data"]["symbol"] }>
                        { successData[0]["data"]["symbol"] }
                    </label>
                </div>
            {
                // If we only have one stock, no need to run this code.
                successData.length > 1 ?
                    successData.slice(1).map( (item, index) =>
                        <div key={ index }>
                            <input
                                type="radio"
                                id={ item["data"]["symbol"] }
                                name="active-stock"
                                value={ index + 1 }
                            />
                            <label htmlFor={ item["data"]["symbol"] }>
                                { item["data"]["symbol"] }
                            </label>
                        </div>
                    ) : null
            }
            </form>
        );
    }
}

export default ActiveStock;
