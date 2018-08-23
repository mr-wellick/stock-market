import retrieve       from "../user-input.js";
import { USER_INPUT } from "../../Constants";

/**
 ** Begin Tests
 **/
test("Check correct action is returned by retrieve action-creator", () => {

    let userInput = createNew("TSLA");
    let { type }  = retrieve(userInput);
    expect(type).toBe(USER_INPUT);
});

test("Check correct assest name is returned", () => {

    let userInput     = createNew("TSLA");
    let { assetName } = retrieve(userInput);
    expect(assetName).toBe(userInput);
});
/**
 ** End Tests
 **/

function createNew(assetName)
{
    return assetName;
}
