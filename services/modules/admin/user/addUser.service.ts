"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const AddAdminUser = createAsyncThunk(
  "/admin/create",
  async (data: object) => {
    const url = `/admin/create`;
    return api.post(url, data).then((response) => response.data);
  }
);
