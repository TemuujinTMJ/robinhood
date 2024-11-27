"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const DeleteAdminQuizList = createAsyncThunk(
  "/quiz/delete",
  async (data: object) => {
    const url = `/quiz/delete`;
    return api.post(url, data).then((response) => response.data);
  }
);
