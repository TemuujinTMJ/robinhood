"use client";
import { createSlice } from "@reduxjs/toolkit";
import { JournalUpdate } from "./journalUpdate.service";
import { message } from "antd";

const initialState = {
  journalUpdateloading: false,
};

const userJournalUpdate = createSlice({
  name: "JournalUpdate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(JournalUpdate.pending, (state) => {
      state.journalUpdateloading = true;
    });

    builder.addCase(JournalUpdate.fulfilled, (state, action) => {
      state.journalUpdateloading = false;

      if (action.payload.success) {
        void message.success("Journal successfully updated!!");
      } else {
        void message.error(action.payload.error);
      }
    });

    builder.addCase(JournalUpdate.rejected, (state) => {
      state.journalUpdateloading = false;
    });
  },
});

export default userJournalUpdate.reducer;
