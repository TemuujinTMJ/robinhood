"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DeleteAdminArticle } from "./deleteArticle.service";
import { message } from "antd";

const initialState = {
  deleteArticleloading: false,
};

const ArticleDelete = createSlice({
  name: "deleteArticle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(DeleteAdminArticle.pending, (state) => {
      state.deleteArticleloading = true;
    });

    builder.addCase(DeleteAdminArticle.fulfilled, (state, action: PayloadAction<any>) => {
      state.deleteArticleloading = false;
      if(action.payload.success) {
        void message.success('Article successfulle deleted!')
      } else {
        void message.error(action.payload.response)
      }
    });

    builder.addCase(DeleteAdminArticle.rejected, (state) => {
      state.deleteArticleloading = false;
    });
  },
});

export default ArticleDelete.reducer;
