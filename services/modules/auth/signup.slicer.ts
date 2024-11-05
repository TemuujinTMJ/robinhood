"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignUp } from "./signup.service";

const initialState = {
  loading: false,
  user: null,
};

const userSignUp = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SignUp.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(SignUp.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.user = action.payload?.user || null;

      // Save the token to local storage
      if (action.payload?.success) {
        localStorage.setItem("token", action.payload?.token); // Save token to localStorage
        alert('Амжилттай бүртгэгдлээ')
      } else {
        alert(action.payload.error);

      }

    });

    builder.addCase(SignUp.rejected, (state) => {
      state.loading = false;
      state.user = null;
    });
  },
});

export default userSignUp.reducer;