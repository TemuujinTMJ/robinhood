"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetCourseList = createAsyncThunk("/course/list", async (data: object) => {
  const url = `/course/list`;
  return api.post(url, data).then((response) => response.data);
});
