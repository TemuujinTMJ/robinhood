"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUser } from "./user.service";
import { User } from "@/types/types";
import Cookies from "js-cookie";

interface UserState {
  loadingUser: boolean;
  user: User | null;
}
const initialState: UserState = {
  loadingUser: true,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loadingUser = true;
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loadingUser = false;
        if (action.payload.id) {
          state.user = action.payload;
        } else {
          Cookies.remove("token");
        }
      })
      .addCase(fetchUser.rejected, (state) => {
        state.loadingUser = false;
      });
  },
});

export default userSlice.reducer;
