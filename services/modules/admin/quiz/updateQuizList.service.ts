"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const UpdateAdminQuizList = createAsyncThunk(
  "/quiz/update",
  async (data: object) => {
    const url = `/quiz/update`;
    return api.post(url, data).then((response) => response.data);
  }
);
