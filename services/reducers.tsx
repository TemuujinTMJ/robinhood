"use client";
import { combineReducers } from "redux";

import LoginReducer from "./modules/auth/login.slicer";
import SignUpReducer from "./modules/auth/signup.slicer";
import FetchUser from "./modules/auth/user.slicer";
import GetAdminUsers from "./modules/admin/user/getUserList.slicer"
//course
import GetCourseList from "./modules/admin/course/getCourseList.slicer"
import UpdateCourse from "./modules/admin/course/updateCourse.slicer"
import DeleteCourse from "./modules/admin/course/deleteCourse.slicer"
import CreateCourse from "./modules/admin/course/createCourse.slicer"
//quiz
import GetQuizList from "./modules/admin/course/getCourseList.slicer"
import GetPipPairs from "./modules/user/pip-calculator/getPipCurrencyPair.slicer"

const rootReducer = combineReducers({
  LoginReducer,
  SignUpReducer,
  FetchUser,
  GetAdminUsers,
  //course
  GetCourseList,
  UpdateCourse,
  DeleteCourse,
  CreateCourse,
  //quiz
  GetQuizList,
  //pip currency
  GetPipPairs
});
export default rootReducer;
