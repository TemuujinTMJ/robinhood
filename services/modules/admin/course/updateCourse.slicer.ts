"use client";
import { createSlice } from "@reduxjs/toolkit";
import { UpdateCourse } from "./updateCourse.service";

const initialState = {
  loadingUpdate: false,
};

const adminCourseList = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UpdateCourse.pending, (state) => {
      state.loadingUpdate = true;
    });

    builder.addCase(UpdateCourse.fulfilled, (state) => {
      state.loadingUpdate = false;
    });

    builder.addCase(UpdateCourse.rejected, (state) => {
      state.loadingUpdate = false;
    });
  },
});

export default adminCourseList.reducer;