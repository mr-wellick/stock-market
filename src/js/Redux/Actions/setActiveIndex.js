import { SET_ACTIVE_INDEX } from "../Constants/";

const setActiveIndex = function(activeIndex){
    return dispatch => {
        dispatch({ type: SET_ACTIVE_INDEX, activeIndex });
    };
};

export default setActiveIndex;
