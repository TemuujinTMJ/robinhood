"use client";
import { createSlice } from "@reduxjs/toolkit";
import { SignUp } from "./signup.service";

const initialState = {
  loading: false,
};
const userSignUp = createSlice({
  name: "signup",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(SignUp.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(SignUp.fulfilled, (state) => {
      state.loading = false;
    });

    builder.addCase(SignUp.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default userSignUp.reducer;