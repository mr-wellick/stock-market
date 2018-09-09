import { IS_FETCHING_DATA } from "../../Constants";
import  isFetchingData      from "../is-fetching-data";

test("make sure fetching data action is logged correctly", () => {
    let fetchingDataAction   = isFetchingData(true);
    let { type, isFetching } = fetchingDataAction;

    expect(type).toBe(IS_FETCHING_DATA);
    expect(isFetching).toBe(true);
});
