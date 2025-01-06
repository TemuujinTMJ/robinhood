"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UpdateUser } from "./updateUser.service";
import { message } from "antd";

interface UpdateUserState {
  loadingUserUpdate: boolean;
}

const initialState: UpdateUserState = {
  loadingUserUpdate: false,
};

const UserUpdate = createSlice({
  name: "updateUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UpdateUser.pending, (state) => {
      state.loadingUserUpdate = true;
    });

    builder.addCase(
      UpdateUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loadingUserUpdate = false;
        console.log(action.payload);
        if (action.payload.success) {
          void message.success("Хэрэглэгчийн мэдээлэл амжилттай шинэчлэгдлээ!");
        } else {
          void message.error(action.payload.response);
        }
      }
    );

    builder.addCase(UpdateUser.rejected, (state) => {
      state.loadingUserUpdate = false;
    });
  },
});

export default UserUpdate.reducer;
