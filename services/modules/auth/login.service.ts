"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const Login = createAsyncThunk("/login", async (data: object) => {
  const url = `/login`;
  return api.post(url, data).then((response) => response.data);
});
