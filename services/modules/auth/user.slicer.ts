"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUser } from "./user.service";
import { User } from "@/types/types";

interface UserState {
  loadingUser: boolean;
  user: User | null;
}
const initialState: UserState = {
  loadingUser: false,
  user: null
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
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.loadingUser = false;
      });
  },
});

export default userSlice.reducer;
