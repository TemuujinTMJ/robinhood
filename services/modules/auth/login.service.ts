"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const Login = createAsyncThunk("/auth/login", async (data: object) => {
  const url = `/auth/login`;
  return api.post(url, data).then((response) => response.data);
});
