"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const JournalCreate = createAsyncThunk("/journal/create", async (data: object) => {
  const url = `/journal/create`;
  return api.post(url, data).then((response) => response.data);
});
