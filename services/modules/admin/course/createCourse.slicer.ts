"use client";
import { createSlice } from "@reduxjs/toolkit";
import { CreateCourse } from "./createCourse.service";

const initialState = {
  loadingCreate: false,
};

const adminCourseList = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CreateCourse.pending, (state) => {
      state.loadingCreate = true;
    });

    builder.addCase(CreateCourse.fulfilled, (state,) => {
      state.loadingCreate = false;
    });

    builder.addCase(CreateCourse.rejected, (state) => {
      state.loadingCreate = false;
    });
  },
});

export default adminCourseList.reducer;