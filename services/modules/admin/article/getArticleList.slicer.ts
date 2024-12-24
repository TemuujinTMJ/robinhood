"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAdminArticleList } from "./getArticleList.service";
import { message } from "antd";

const initialState = {
  getArticleListLoading: false,
  articles: [],
  total: -1,
};

const ArticleList = createSlice({
  name: "getArticleList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAdminArticleList.pending, (state) => {
      state.getArticleListLoading = true;
    });

    builder.addCase(
      GetAdminArticleList.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.getArticleListLoading = false;
        if (action.payload.success) {
          state.total = action.payload.total_count;
          state.articles = action.payload.articles
        } else {
          void message.error(action.payload.response);
        }
      }
    );

    builder.addCase(GetAdminArticleList.rejected, (state) => {
      state.getArticleListLoading = false;
    });
  },
});

export default ArticleList.reducer;
