"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const UpdateCourse = createAsyncThunk("/course/update", async () => {
  const url = `/course/update`;
  return api.post(url).then((response) => response.data);
});
