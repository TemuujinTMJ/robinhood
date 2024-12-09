"use client";
import { createSlice } from "@reduxjs/toolkit";
import { JournalList } from "./journalList.service";
import { message } from "antd";

const initialState = {
  journalListloading: false,
  journal: []
};

const userJournalList = createSlice({
  name: "JournalList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(JournalList.pending, (state) => {
      state.journalListloading = true;
    });

    builder.addCase(JournalList.fulfilled, (state, action) => {
      state.journalListloading = false;

      if (action.payload.success) {
        state.journal = action.payload
      } else {
        void message.error(action.payload.error);
      }
    });

    builder.addCase(JournalList.rejected, (state) => {
      state.journalListloading = false;
    });
  },
});

export default userJournalList.reducer;
