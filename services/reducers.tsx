"use client";
import { combineReducers } from "redux";

import LoginReducer from "./modules/auth/login.slicer";

const rootReducer = combineReducers({
  LoginReducer,
});
export default rootReducer;
