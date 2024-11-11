"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAdminQuizList } from "./getQuizList.service";

const initialState = {
  loading: false,
  quiz: []
};

const adminUserList = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAdminQuizList.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(GetAdminQuizList.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.quiz = action.payload
    });

    builder.addCase(GetAdminQuizList.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default adminUserList.reducer;