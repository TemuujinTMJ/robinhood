"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetCourseList = createAsyncThunk("/course/list", async () => {
  const url = `/course/list`;
  return api.post(url).then((response) => response.data);
});
