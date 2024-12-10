"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignUp } from "./signup.service";
import { message } from "antd";

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

    builder.addCase(SignUp.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      if(action.payload.success) {
        void message.success('Бүртгэл амжилттай үүслээ!');
      } else {
        void message.error(action.payload.response);
      }
    });

    builder.addCase(SignUp.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default userSignUp.reducer;