import userInput      from "../user-input.js";
import { USER_INPUT } from "../../Constants";

test("Check correct action type is returned by userInput action-creator", () => {
    let names            = ["TSLA"];
    let userInputAction = userInput(names);
    let { type }        = userInputAction;
    expect(type).toBe(USER_INPUT);
});

test("Check correct asset names is returned by userInput action-creator", () => {
    let names           = ["TSLA", "KO", "IBM", "AAPL", "NFLX"];
    let userInputAction = userInput(names);
    let { assetsName }   = userInputAction;

    expect(assetsName).toContain(names[0]);
    expect(assetsName).toContain(names[1]);
    expect(assetsName).toContain(names[2]);
    expect(assetsName).toContain(names[3]);
    expect(assetsName).toContain(names[4]);
});

