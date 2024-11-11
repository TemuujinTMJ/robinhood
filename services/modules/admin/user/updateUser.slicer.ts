"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UpdateAdminUser } from "./updateUser.service";
import { User } from "@/types/types";

interface UsersState {
  loadingUsers: boolean;
  users: User[] | null;
}

const initialState: UsersState = {
  loadingUsers: false,
  users: null
};

const adminUserList = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UpdateAdminUser.pending, (state) => {
      state.loadingUsers = true;
    });

    builder.addCase(UpdateAdminUser.fulfilled, (state, action: PayloadAction<any>) => {
      state.loadingUsers = false;
      state.users = action.payload.users
    });

    builder.addCase(UpdateAdminUser.rejected, (state) => {
      state.loadingUsers = false;
    });
  },
});

export default adminUserList.reducer;