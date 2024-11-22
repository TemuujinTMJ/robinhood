"use client";
import { createSlice } from "@reduxjs/toolkit";
import { DeleteCourse } from "./deleteCourse.service";

const initialState = {
  loadingDelete: false,
};

const adminCourseList = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(DeleteCourse.pending, (state) => {
      state.loadingDelete = true;
    });

    builder.addCase(DeleteCourse.fulfilled, (state) => {
      state.loadingDelete = false;
    });

    builder.addCase(DeleteCourse.rejected, (state) => {
      state.loadingDelete = false;
    });
  },
});

export default adminCourseList.reducer;