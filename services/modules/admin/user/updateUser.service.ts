"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const UpdateAdminUser = createAsyncThunk(
  "/admin/user/update",
  async (data: object) => {
    const url = `/admin/user/update`;
    return api.post(url, data).then((response) => response.data);
  }
);
