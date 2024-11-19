"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetPipPairList = createAsyncThunk(
    "/pip/list",
    async () => {
        const url = "pip/list";
        return api.get(url).then((response) => response.data);
    }
);