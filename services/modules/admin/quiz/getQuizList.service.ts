"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetAdminQuizList = createAsyncThunk(
  "/quiz/list",
  async (data: object) => {
    const url = `/quiz/list`;
    return api.post(url, data).then((response) => response.data);
  }
);
