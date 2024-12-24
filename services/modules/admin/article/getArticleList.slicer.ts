"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAdminArticleList } from "./getArticleList.service";
import { message } from "antd";
import { Article } from "@/types/types";

interface ArticleState {
  getArticleListLoading: boolean;
  articles: Article[];
  total: number;
}

const initialState: ArticleState = {
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
        if (action.payload.success && state.articles.length !== action.payload.total) {
          state.total = action.payload.total_count;
          state.articles = [...state.articles, ...action.payload.articles]
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
