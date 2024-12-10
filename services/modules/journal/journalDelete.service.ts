"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const JournalDelete = createAsyncThunk("/journal/delete", async (data: object) => {
  const url = `/journal/delete`;
  return api.post(url, data).then((response) => response.data);
});
