"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const QuizGet = createAsyncThunk("/quiz/get", async () => {
  const url = `/quiz/get`;
  return api.post(url).then((response) => response.data);
});
