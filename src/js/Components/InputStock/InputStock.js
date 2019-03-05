import React        from "react";
import { useState } from "react";
import PropTypes    from "prop-types";
import "./style.scss";


function InputStock(props){
    const [input, setInput] = useState("");

    function onSubmit(event){
        event.preventDefault();
        event.target.children[0].value = "";

        console.log(input);
    }

    return(
        <form
            className={ "input-form " + props.className }
            onSubmit={ onSubmit }
        >
            <input
                className="input is-small"
                type="search"
                onChange={ (event) => setInput(event.target.value) }
            />
        </form>
    );
}

InputStock.propTypes = {
    className: PropTypes.string
};

export default InputStock;
