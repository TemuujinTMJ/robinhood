"use client";
import { createSlice } from "@reduxjs/toolkit";
import { AddAdminUser } from "./addUser.service";

interface UsersState {
  loadingUserCreateAdmin: boolean;
}

const initialState: UsersState = {
  loadingUserCreateAdmin: false,
};

const adminAddUser = createSlice({
  name: "addAdminUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddAdminUser.pending, (state) => {
      state.loadingUserCreateAdmin = true;
    });

    builder.addCase(AddAdminUser.fulfilled, (state) => {
      state.loadingUserCreateAdmin = false;
    });

    builder.addCase(AddAdminUser.rejected, (state) => {
      state.loadingUserCreateAdmin = false;
    });
  },
});

export default adminAddUser.reducer;