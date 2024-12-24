"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAdminArticleSingle } from "./getArticleSingle.service";
import { message } from "antd";
import { Article } from "@/types/types";

interface ArticleState {
  getArticleLoading: boolean;
  article: Article | null;
}

const initialState: ArticleState = {
  getArticleLoading: false,
  article: null,
};

const ArticleSingle = createSlice({
  name: "getArticleSingle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAdminArticleSingle.pending, (state) => {
      state.getArticleLoading = true;
    });

    builder.addCase(
      GetAdminArticleSingle.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.getArticleLoading = false;
        if (action.payload.success) {
          state.article = action.payload.article
        } else {
          void message.error(action.payload.response);
        }
      }
    );

    builder.addCase(GetAdminArticleSingle.rejected, (state) => {
      state.getArticleLoading = false;
    });
  },
});

export default ArticleSingle.reducer;
