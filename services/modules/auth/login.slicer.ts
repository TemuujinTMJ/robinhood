"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Login } from "./login.service";
import Cookies from "js-cookie";
import { message } from "antd";

const initialState = {
  loading: false,
};

const userLogin = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Login.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(Login.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      if (action.payload.success) {
        const token = action.payload?.token;
        void message.success("Амжилттай нэвтэрлээ!");

        if (token) {
          Cookies.set("token", token);
        }
      } else {
        void message.error(action.payload.response);
      }
    });

    builder.addCase(Login.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default userLogin.reducer;
