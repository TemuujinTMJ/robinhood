"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignUp } from "./signup.service";
import { message } from "antd";
import { useRouter } from "next/navigation";

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

      if (action.payload?.success) {
        localStorage.setItem("token", action.payload?.token); 
        message.success('Амжилттай бүртгэгдлээ')
        window.location.replace('/login')
      } else {
        message.success(action.payload.error);

      }

    });

    builder.addCase(SignUp.rejected, (state) => {
      state.loading = false;
      state.user = null;
    });
  },
});

export default userSignUp.reducer;