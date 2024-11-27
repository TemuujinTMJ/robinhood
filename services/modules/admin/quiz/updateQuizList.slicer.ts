"use client";
import { createSlice } from "@reduxjs/toolkit";
import { UpdateAdminQuizList } from "./updateQuizList.service";

const initialState = {
  udpateQuizloading: false,
};

const QuizList = createSlice({
  name: "updateQuiz",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UpdateAdminQuizList.pending, (state) => {
      state.udpateQuizloading = true;
    });

    builder.addCase(UpdateAdminQuizList.fulfilled, (state) => {
      state.udpateQuizloading = false;
    });

    builder.addCase(UpdateAdminQuizList.rejected, (state) => {
      state.udpateQuizloading = false;
    });
  },
});

export default QuizList.reducer;
