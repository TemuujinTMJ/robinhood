"use client";
import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { QuizGet } from "./quizGet.service";
import { Quiz } from "@/types/types";
interface QuizState {
  getQuizloading: boolean;
  quiz: Quiz | null;
}
const initialState: QuizState = {
  getQuizloading: true,
  quiz: null,
};

const GetQuiz = createSlice({
  name: "quizCreate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(QuizGet.pending, (state) => {
      state.getQuizloading = true;
    });

    builder.addCase(QuizGet.fulfilled, (state, action) => {
      state.getQuizloading = false;

      if (action.payload.success) {
        state.quiz = action.payload.quiz;
      } else {
        void message.error(action.payload.response);
      }
    });

    builder.addCase(QuizGet.rejected, (state) => {
      state.getQuizloading = false;
    });
  },
});

export default GetQuiz.reducer;
