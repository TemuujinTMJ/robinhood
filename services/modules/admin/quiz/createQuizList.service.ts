"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const CreateAdminQuizList = createAsyncThunk(
  "/quiz/create",
  async (data: object) => {
    const url = `/quiz/create`;
    return api.post(url, data).then((response) => response.data);
  }
);
