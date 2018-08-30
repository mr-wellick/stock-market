import { FETCH_ERROR } from "../../Constants";
import { fetchError }  from "../Fetch-Data";
import { errorData }   from "../Fetch-Data";

// Need to add more tests
test("make sure data is process", () => {
    let dataReturnedByAPI = errorData;
    let dataProcessed     = Object.entries(dataReturnedByAPI);
    let errorAction       = fetchError(dataProcessed); 
    let { type }          = errorAction;
    expect(type).toBe(FETCH_ERROR);
});