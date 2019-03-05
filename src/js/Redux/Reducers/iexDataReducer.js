import { IS_FETCHING }      from "../Constants/";
import { FETCH_IEX_DATA }   from "../Constants/";
import { SET_ACTIVE_INDEX } from "../Constants/";
import { DELETE_STOCK }     from "../Constants/";

function iexDataReducer(
    state = { data: [], isFetching: false, activeIndex: 0 },
    action
){
    switch(action.type)
    {
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case FETCH_IEX_DATA:
            return {
                ...state,
                data: [...state.data, action.data]
            };
        case SET_ACTIVE_INDEX:
            return {
                ...state,
                activeIndex: action.activeIndex
            };
        case DELETE_STOCK:
            return {
                ...state,
                data: state.data.filter(item => item.quote.symbol !== action.symbol)
            };
        default:
            return state;
    }
}

export default iexDataReducer;
