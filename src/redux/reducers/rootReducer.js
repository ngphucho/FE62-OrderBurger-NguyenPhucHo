import { combineReducers } from "redux";
import burgerReducer from "./burgerReducer";

const rootReducer = combineReducers({ burgerReducer });

export default rootReducer;
