"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAdminUserList } from "./getUserList.service";
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
    builder.addCase(GetAdminUserList.pending, (state) => {
      state.loadingUsers = true;
    });

    builder.addCase(GetAdminUserList.fulfilled, (state, action: PayloadAction<any>) => {
      state.loadingUsers = false;
      state.users = action.payload.users
    });

    builder.addCase(GetAdminUserList.rejected, (state) => {
      state.loadingUsers = false;
    });
  },
});

export default adminUserList.reducer;