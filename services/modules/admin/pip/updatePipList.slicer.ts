"use client";
import { createSlice } from "@reduxjs/toolkit";
import { UpdatePipList } from "./updatePipList.service";

const initialState = {
  updatePipLoading: false,
};

const QuizList = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UpdatePipList.pending, (state) => {
      state.updatePipLoading = true;
    });

    builder.addCase(UpdatePipList.fulfilled, (state) => {
      state.updatePipLoading = false;
    });

    builder.addCase(UpdatePipList.rejected, (state) => {
      state.updatePipLoading = false;
    });
  },
});

export default QuizList.reducer;