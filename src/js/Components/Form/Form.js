import React, { Component } from "react";
import "./form.scss";

class Form extends Component{
    render(){
        return(
            <div className="section-home-form__container">
                <form className="section-home__form">
                    <div className="section-home__form-input">
                        <input
                            type="text"
                            placeholder="Enter a ticker: TSLA, BTC, IBM"
                        />
                    </div>
                    <div className="section-home__form-submit">
                        <input
                            type="submit"
                            value="View"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
