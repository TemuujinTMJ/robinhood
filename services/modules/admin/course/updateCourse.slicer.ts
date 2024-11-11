"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UpdateCourse } from "./updateCourse.service";

const initialState = {
  loading: false,
  courses: []
};

const adminCourseList = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UpdateCourse.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(UpdateCourse.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      console.log(action.payload)
      state.courses = action.payload
    });

    builder.addCase(UpdateCourse.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default adminCourseList.reducer;