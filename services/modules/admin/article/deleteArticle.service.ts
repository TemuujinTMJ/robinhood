"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const DeleteAdminArticle = createAsyncThunk(
  "/article/delete",
  async (data: object) => {
    const url = `/article/delete`;
    return api.post(url, data).then((response) => response.data);
  }
);
