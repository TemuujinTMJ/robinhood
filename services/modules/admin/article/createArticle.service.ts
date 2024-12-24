"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const CreateAdminArticle = createAsyncThunk(
  "/article/create",
  async (data: object) => {
    const url = `/article/create`;
    return api.post(url, data).then((response) => response.data);
  }
);
