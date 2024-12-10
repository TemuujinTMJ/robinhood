"use client";
import { createSlice } from "@reduxjs/toolkit";
import { JournalList } from "./journalList.service";
import { message } from "antd";

const initialState = {
  journalListloading: false,
  journal: [],
  total: 0
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
        state.journal = action.payload.journals
        state.total = action.payload.total_count
      } else {
        void message.error(action.payload.response);
      }
    });

    builder.addCase(JournalList.rejected, (state) => {
      state.journalListloading = false;
    });
  },
});

export default userJournalList.reducer;
