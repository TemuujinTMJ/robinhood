"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetAdminUserList = createAsyncThunk(
  "/admin/user/list",
  async (data: object) => {
    const url = `/admin/user/list`;
    return api.post(url, data).then((response) => response.data);
  }
);
