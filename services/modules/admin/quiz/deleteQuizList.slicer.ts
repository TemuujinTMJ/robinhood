"use client";
import { createSlice } from "@reduxjs/toolkit";
import { DeleteAdminQuizList } from "./deleteQuizList.service";

const initialState = {
  deleteQuizloading: false,
};

const QuizDelete = createSlice({
  name: "updateQuiz",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(DeleteAdminQuizList.pending, (state) => {
      state.deleteQuizloading = true;
    });

    builder.addCase(DeleteAdminQuizList.fulfilled, (state) => {
      state.deleteQuizloading = false;
    });

    builder.addCase(DeleteAdminQuizList.rejected, (state) => {
      state.deleteQuizloading = false;
    });
  },
});

export default QuizDelete.reducer;
