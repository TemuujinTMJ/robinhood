"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const SignUp = createAsyncThunk("/user/create", async (data: object) => {
  const url = `/user/create`;
  return api.post(url, data).then((response) => response);
});
