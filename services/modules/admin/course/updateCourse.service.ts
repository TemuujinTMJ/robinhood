"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const UpdateCourse = createAsyncThunk("/course/update", async (data: object) => {
  const url = `/course/update`;
  return api.post(url, data).then((response) => response.data);
});
