"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAdminQuizList } from "./getQuizList.service";
import { Quiz } from "@/types/types";

interface QuizState {
  getQuizloading: boolean;
  quiz: Quiz[] | null;
  total: number;
}

const initialState: QuizState = {
  getQuizloading: true,
  quiz: [],
  total: 0,
};

const QuizList = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAdminQuizList.pending, (state) => {
      state.getQuizloading = true;
    });

    builder.addCase(
      GetAdminQuizList.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.getQuizloading = false;
        state.quiz = action.payload.quizzes;
        state.total = action.payload.total_count;
      }
    );

    builder.addCase(GetAdminQuizList.rejected, (state) => {
      state.getQuizloading = false;
    });
  },
});

export default QuizList.reducer;
