"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetPipPairList } from "./getPipCurrencyPair.service";
import { message } from "antd";

interface PipPairState {
  loadingPipPairs: boolean;
  pipPairs: object;
}

const initialState: PipPairState = {
  loadingPipPairs: true,
  pipPairs: {},
};

const pipPairList = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetPipPairList.pending, (state) => {
      state.loadingPipPairs = true;
    });

    builder.addCase(
      GetPipPairList.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loadingPipPairs = false;
        if (action.payload.success) {
          state.pipPairs = action.payload.currencies;
        } else {
          void message.error(action.payload.response);
        }
      }
    );

    builder.addCase(GetPipPairList.rejected, (state) => {
      state.loadingPipPairs = false;
    });
  },
});

export default pipPairList.reducer;
