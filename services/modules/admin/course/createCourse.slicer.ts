"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateCourse } from "./createCourse.service";

const initialState = {
  loading: false,
  courses: []
};

const adminCourseList = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CreateCourse.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(CreateCourse.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      console.log(action.payload)
      state.courses = action.payload
    });

    builder.addCase(CreateCourse.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default adminCourseList.reducer;