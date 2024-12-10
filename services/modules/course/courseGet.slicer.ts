"use client";
import { createSlice } from "@reduxjs/toolkit";
import { GetCourse } from "./courseGet.service";
import { message } from "antd";
import { Course } from "@/types/types";

interface initialStatesType  {
  loadingCourseGet: boolean,
  course: Course | null,
};
const initialState:initialStatesType = {
  loadingCourseGet: false,
  course: null,
};

const userGetCourse = createSlice({
  name: "GetCourse",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetCourse.pending, (state) => {
      state.loadingCourseGet = true;
    });

    builder.addCase(GetCourse.fulfilled, (state, action) => {
      state.loadingCourseGet = false;

      if(action.payload.success) {
        state.course = action.payload.course
      } else {
        void message.error(action.payload.response)
      }
    });
 
    builder.addCase(GetCourse.rejected, (state) => {
      state.loadingCourseGet = false;
    });
  },
});

export default userGetCourse.reducer;