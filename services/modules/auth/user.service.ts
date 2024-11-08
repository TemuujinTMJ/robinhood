"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("/user/get", async () => {
  const url = `/user/get`;
  return api.get(url).then((response) => response.data);
});
