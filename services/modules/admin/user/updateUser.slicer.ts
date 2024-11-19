"use client";
import { createSlice } from "@reduxjs/toolkit";
import { UpdateAdminUser } from "./updateUser.service";

interface UsersState {
  loadingUpdateUsers: boolean;
}

const initialState: UsersState = {
  loadingUpdateUsers: false,
};

const adminUserList = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UpdateAdminUser.pending, (state) => {
      state.loadingUpdateUsers = true;
    });

    builder.addCase(UpdateAdminUser.fulfilled, (state) => {
      state.loadingUpdateUsers = false;
    });

    builder.addCase(UpdateAdminUser.rejected, (state) => {
      state.loadingUpdateUsers = false;
    });
  },
});

export default adminUserList.reducer;