"use client";
import { createSlice } from "@reduxjs/toolkit";
import { JournalCreate } from "./journalCreate.service";
import { message } from "antd";

const initialState = {
  journalCreateloading: false,
};

const userJournalCreate = createSlice({
  name: "journalCreate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(JournalCreate.pending, (state) => {
      state.journalCreateloading = true;
    });

    builder.addCase(JournalCreate.fulfilled, (state, action) => {
      state.journalCreateloading = false;

      if (action.payload.success) {
        message.success("Тэмдэглэл амжилттай нэмэгдлээ!");

      } else {
        void message.error(action.payload.response);
      }
    });

    builder.addCase(JournalCreate.rejected, (state) => {
      state.journalCreateloading = false;
    });
  },
});

export default userJournalCreate.reducer;
