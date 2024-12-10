"use client";
import { createSlice } from "@reduxjs/toolkit";
import { JournalDelete } from "./journalDelete.service";
import { message } from "antd";

const initialState = {
  journalDeleteloading: false,
};

const userJournalDelete = createSlice({
  name: "JournalDelete",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(JournalDelete.pending, (state) => {
      state.journalDeleteloading = true;
    });

    builder.addCase(JournalDelete.fulfilled, (state, action) => {
      state.journalDeleteloading = false;

      if (action.payload.success) {
        void message.success("Journal successfully deleted!!");
      } else {
        void message.error(action.payload.response);
      }
    });

    builder.addCase(JournalDelete.rejected, (state) => {
      state.journalDeleteloading = false;
    });
  },
});

export default userJournalDelete.reducer;
