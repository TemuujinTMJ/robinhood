"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DeleteCourse } from "./deleteCourse.service";

const initialState = {
  loading: false,
  courses: []
};

const adminCourseList = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(DeleteCourse.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(DeleteCourse.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      console.log(action.payload)
      state.courses = action.payload
    });

    builder.addCase(DeleteCourse.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default adminCourseList.reducer;