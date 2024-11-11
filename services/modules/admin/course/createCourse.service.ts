"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const CreateCourse = createAsyncThunk("/course/create", async () => {
  const url = `/course/create`;
  return api.post(url).then((response) => response.data);
});
