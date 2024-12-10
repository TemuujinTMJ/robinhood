"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const JournalUpdate = createAsyncThunk("/journal/update", async (data: object) => {
  const url = `/journal/update`;
  return api.post(url, data).then((response) => response.data);
});
