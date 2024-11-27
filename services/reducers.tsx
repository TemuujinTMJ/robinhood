"use client";
import { combineReducers } from "redux";

import LoginReducer from "./modules/auth/login.slicer";
import SignUpReducer from "./modules/auth/signup.slicer";
import FetchUser from "./modules/auth/user.slicer";
import GetPipPairs from "./modules/user/pip-calculator/getPipCurrencyPair.slicer";
//adminUser
import GetAdminUsers from "./modules/admin/user/getUserList.slicer";
import AddAdminUserReducer from "./modules/admin/user/addUser.slicer";
import updateAdminUserReducer from "./modules/admin/user/updateUser.slicer";
//course
import GetCourseList from "./modules/admin/course/getCourseList.slicer";
import UpdateCourse from "./modules/admin/course/updateCourse.slicer";
import DeleteCourse from "./modules/admin/course/deleteCourse.slicer";
import CreateCourse from "./modules/admin/course/createCourse.slicer";
//quiz
import GetQuizList from "./modules/admin/quiz/getQuizList.slicer";
import UpdateQuizList from "./modules/admin/quiz/updateQuizList.slicer";
import CreateQuizList from "./modules/admin/quiz/createQuizList.slicer";
import DeleteQuizList from "./modules/admin/quiz/deleteQuizList.slicer";
//pip
import UpdatePipMuliple from "./modules/admin/pip/updatePipList.slicer";

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
  UpdateQuizList,
  CreateQuizList,
  DeleteQuizList,
  //pip currency
  GetPipPairs,
  //adminUser
  AddAdminUserReducer,
  updateAdminUserReducer,
  //pip
  UpdatePipMuliple,
});
export default rootReducer;
