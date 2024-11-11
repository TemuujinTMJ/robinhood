"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetCourseList } from "./getCourseList.service";

const initialState = {
  loading: false,
  courses: []
};

const adminCourseList = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetCourseList.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(GetCourseList.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      console.log(action.payload)
      state.courses = action.payload
    });

    builder.addCase(GetCourseList.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default adminCourseList.reducer;