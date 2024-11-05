"use client";
import { combineReducers } from "redux";

import LoginReducer from "./modules/auth/login.slicer";
import SignUpReducer from "./modules/auth/signup.slicer";
import FetchUser from "./modules/auth/user.slicer";

const rootReducer = combineReducers({
  LoginReducer,
  SignUpReducer,
  FetchUser,
});
export default rootReducer;
