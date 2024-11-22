"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const DeleteCourse = createAsyncThunk("/course/delete", async (data: object) => {
  const url = `/course/delete`;
  return api.post(url, data).then((response) => response.data);
});
