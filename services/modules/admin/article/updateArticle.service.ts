"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const UpdateAdminArticle = createAsyncThunk(
  "/article/update",
  async (data: object) => {
    const url = `/article/update`;
    return api.post(url, data).then((response) => response.data);
  }
);
