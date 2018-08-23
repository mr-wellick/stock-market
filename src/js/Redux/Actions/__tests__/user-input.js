import retrieve       from "../user-input.js";
import { USER_INPUT } from "../../Constants";

/**
 ** Begin Tests
 **/
test("Check correct action type is returned by retrieve action-creator", () => {

    let userInput       = name;
    let userInputAction = retrieve(userInput);
    let { type }        = userInputAction;
    expect(type).toBe(USER_INPUT);
});

test("Check correct assest name is returned", () => {

    let userInput       = name;
    let userInputAction = retrieve(userInput);
    let { assetName }   = userInputAction;
    expect(assetName).toBe(name);
});
/**
 ** End Tests
 **/

 // Asset name.
 let name = "TSLA";