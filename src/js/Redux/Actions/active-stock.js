import { ACTIVE_STOCK } from "../Constants";
import { store }        from "../Reducers";

function activeStock(id){
    let { successData } = store.getState().receivedData;
    let activeStockData = successData[id];

    return {
        type: ACTIVE_STOCK,
        activeStockData
    };
}

export default activeStock;
