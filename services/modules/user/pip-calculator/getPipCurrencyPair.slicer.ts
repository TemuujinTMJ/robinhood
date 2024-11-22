"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetPipPairList } from "./getPipCurrencyPair.service";
import { PipPair } from "@/types/types";

interface PipPairState {
    loadingPipPairs: boolean;
    pipPairs: object;
};

const initialState: PipPairState = {
    loadingPipPairs: true,
    pipPairs: {}
};

const pipPairList = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetPipPairList.pending, (state) => {
            state.loadingPipPairs = true;
        });

        builder.addCase(GetPipPairList.fulfilled, (state, action: PayloadAction<any>) => {
            state.loadingPipPairs = false;
            state.pipPairs = action.payload.currencies
        })

        builder.addCase(GetPipPairList.rejected, (state) => {
            state.loadingPipPairs = false;
        })
    }
});

export default pipPairList.reducer;