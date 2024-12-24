"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetAdminArticleList = createAsyncThunk(
  "/article/list",
  async (data: object) => {
    const url = `/article/list`;
    return api.post(url, data).then((response) => response.data);
  }
);
