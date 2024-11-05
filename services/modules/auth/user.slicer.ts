"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUser } from "./user.service";

const initialState = {
  loadingUser: false,
  user: {
    badge: 0,
    email: '',
    first_name: '',
    id: 0,
    phone: '',
    role: 0,
    status: 0,
    subscription_type: 0,
    trading_account: '',
    xp: 0,
  }
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
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loadingUser = false;
        if(action.payload.success) {
          state.user = action.payload;
        }
      })
      .addCase(fetchUser.rejected, (state) => {
        state.loadingUser = false;
      });
  },
});

export default userSlice.reducer;
