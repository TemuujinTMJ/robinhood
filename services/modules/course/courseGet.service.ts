"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetCourse = createAsyncThunk("/course/get", async (data: object) => {
  const url = `/course/get`;
  return api.post(url, data).then((response) => response.data);
});
