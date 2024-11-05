"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Login } from "./login.service";

const initialState = {
  loading: false,
  user: null,
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
      state.user = action.payload?.user || null;

      if(action.payload.success) {
        const token = action.payload?.token;
      if (token) {
        localStorage.setItem("token", token);
        window.location.replace('/')
      }
      } else {
        alert('Хэрэглэгч олдсонгүй')
      }
    });

    builder.addCase(Login.rejected, (state) => {
      state.loading = false;
      state.user = null;
    });
  },
});

export default userLogin.reducer;