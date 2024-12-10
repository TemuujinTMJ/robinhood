"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const CreateCourse = createAsyncThunk(
  "/course/create",
  async (data: object) => {
    const url = `/course/create`;
    return api.post(url, data).then((response) => response.data);
  }
);
