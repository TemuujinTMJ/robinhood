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
        void message.success("Journal successfully created!!");
      } else {
        void message.error(action.payload.error);
      }
    });

    builder.addCase(JournalCreate.rejected, (state) => {
      state.journalCreateloading = false;
    });
  },
});

export default userJournalCreate.reducer;
