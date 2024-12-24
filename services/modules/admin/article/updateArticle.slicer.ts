"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UpdateAdminArticle } from "./updateArticle.service";
import { message } from "antd";

const initialState = {
  udpateQuizloading: false,
};

const ArticleUpdate = createSlice({
  name: "updateArticle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UpdateAdminArticle.pending, (state) => {
      state.udpateQuizloading = true;
    });

    builder.addCase(UpdateAdminArticle.fulfilled, (state, action: PayloadAction<any>) => {
      state.udpateQuizloading = false;
      if(action.payload.success) {
        void message.success('Article successfulle udpated!')
      } else {
        void message.error(action.payload.response)
      }
    });

    builder.addCase(UpdateAdminArticle.rejected, (state) => {
      state.udpateQuizloading = false;
    });
  },
});

export default ArticleUpdate.reducer;
