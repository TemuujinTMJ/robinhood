"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetAdminQuizList = createAsyncThunk(
  "/admin/quiz/list",
  async () => {
    const url = `/admin/quiz/list`;
    return api.post(url).then((response) => response.data);
  }
);
