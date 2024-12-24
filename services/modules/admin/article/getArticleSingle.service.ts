"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetAdminArticleSingle = createAsyncThunk(
  "/article/get",
  async (data: object) => {
    const url = `/article/get`;
    return api.post(url, data).then((response) => response.data);
  }
);
