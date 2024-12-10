"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const QuizGet = createAsyncThunk("/quiz/get", async (data: object) => {
  const url = `/quiz/get`;
  return api.post(url, data).then((response) => response.data);
});
