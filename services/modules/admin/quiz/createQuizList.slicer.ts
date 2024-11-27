"use client";
import { createSlice } from "@reduxjs/toolkit";
import { CreateAdminQuizList } from "./createQuizList.service";

const initialState = {
  addQuizloading: false,
};

const QuizCreate= createSlice({
  name: "createQuiz",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CreateAdminQuizList.pending, (state) => {
      state.addQuizloading = true;
    });

    builder.addCase(CreateAdminQuizList.fulfilled, (state) => {
      state.addQuizloading = false;
    });

    builder.addCase(CreateAdminQuizList.rejected, (state) => {
      state.addQuizloading = false;
    });
  },
});

export default QuizCreate.reducer;
