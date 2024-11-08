"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { GetAdminUserList } from "./getUserList.service";

const initialState = {
  loading: false,
  users: []
};

const adminUserList = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAdminUserList.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(GetAdminUserList.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      console.log(action.payload)
      state.users = action.payload.users
    });

    builder.addCase(GetAdminUserList.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default adminUserList.reducer;