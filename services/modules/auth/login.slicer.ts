"use client";
import { createSlice } from "@reduxjs/toolkit";
// import { compareIds } from 'util/utils';
import { Login } from "./login.service";

const initialState = {
  loading: true,
  user: null,
  // currentRole: null,
  // roles: [],
  // error: "",
  // org: {
  //   esis: false,
  // },
};

const userLogin = createSlice({
  name: "login",
  initialState,
  reducers: {
    // setCurrentRole(state, action) {
    //   state.currentRole = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(Login.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(Login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload?.user || null;
      console.log(action.payload, "res");
      // (action.payload?.roles || []).map(() => {

      // const domain = (window.location.hostname || "").split(".");
      // if (role?.org?.slug && domain) {
      // if (compareIds((role?.org?.slug || '').toString(), domain[0].toString())) {
      //   state.org.esis = role?.org?.esis;
      //   state.org.org_type = role?.org?.org_type;
      // }
      // }
      // return {
      //   ...state,
      // };
      // });
    });

    builder.addCase(Login.rejected, (state) => {
      state.loading = false;
      state.user = null;
      // state.error = action.error.message;
    });
  },
});

// export const { setCurrentRole } = userLogin.actions;
export default userLogin.reducer;
