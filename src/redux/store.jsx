import { combineReducers, legacy_createStore } from "redux";
import basketReducer from "./reducer/basketReducer";

const sumReducer = combineReducers({
  basketReducer: basketReducer,
});

export const store = legacy_createStore(sumReducer);
