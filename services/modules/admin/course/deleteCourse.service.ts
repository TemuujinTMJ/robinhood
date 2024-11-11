"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const DeleteCourse = createAsyncThunk("/course/delete", async () => {
  const url = `/course/delete`;
  return api.post(url).then((response) => response.data);
});
