"use client";
import { api } from "@/boot/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const UpdateUser = createAsyncThunk(
    "/user/update",
    async (data: object) => {
        const url = "user/update";
        return api.post(url, data).then((response) => response.data);
    }
);