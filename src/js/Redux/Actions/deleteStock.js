import { DELETE_STOCK } from "../Constants/";

const deleteStock = function(symbol){
    return dispatch => {
        dispatch({ type: DELETE_STOCK, symbol });
    };
};

export default deleteStock;
