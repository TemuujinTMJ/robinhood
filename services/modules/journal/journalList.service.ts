"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const JournalList = createAsyncThunk("/journal/list", async (data: object) => {
  const url = `/journal/list`;
  return api.post(url, data).then((response) => response.data);
});
