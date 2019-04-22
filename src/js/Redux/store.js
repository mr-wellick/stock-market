import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./Reducers/";

let store;

if (process.env.NODE_ENV === "development") {
  store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
} else {
  store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
}

export default store;
