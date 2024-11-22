"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const UpdatePipList = createAsyncThunk(
  "/pip/create_multiple",
  async (data: object) => {
    const url = `/pip/create_multiple`;
    return api.post(url, data).then((response) => response.data);
  }
);
