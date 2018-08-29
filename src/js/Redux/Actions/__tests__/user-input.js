import userInput      from "../user-input.js";
import { USER_INPUT } from "../../Constants";

test("Check correct action type is returned by userInput action-creator", () => {
    let name            = "TSLA";
    let userInputAction = userInput(name);
    let { type }        = userInputAction;
    expect(type).toBe(USER_INPUT);
});

test("Check correct asset name is returned by userInput action-creator", () => {
    let name            = "TSLA";
    let userInputAction = userInput(name);
    let { assetName }   = userInputAction;
    expect(assetName).toBe(name);
});