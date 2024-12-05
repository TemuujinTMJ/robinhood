"use client";
import { createSlice } from "@reduxjs/toolkit";
import { QuizCreate } from "./quizCreate.service";
import { message } from "antd";

const initialState = {
  loading: false,
  quiz: null,
};

const userQuizCreate = createSlice({
  name: "quizCreate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(QuizCreate.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(QuizCreate.fulfilled, (state, action) => {
      state.loading = false;

      if(action.payload.success) {
        void message.success('Quiz successfully created!!')
      } else {
        void message.error(action.payload.error)
      }
    });
 
    builder.addCase(QuizCreate.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default userQuizCreate.reducer;