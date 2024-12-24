"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateAdminArticle } from "./createArticle.service";
import { message } from "antd";

interface ArticleState {
  createArticleloading: boolean;
}

const initialState: ArticleState = {
  createArticleloading: false,
};

const ArticleCreate = createSlice({
  name: "articleList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CreateAdminArticle.pending, (state) => {
      state.createArticleloading = true;
    });

    builder.addCase(
      CreateAdminArticle.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.createArticleloading = false;
        if(action.payload.success) {
          void message.success('Article successfulle created!')
        } else {
          void message.error(action.payload.response)
        }
      }
    );

    builder.addCase(CreateAdminArticle.rejected, (state) => {
      state.createArticleloading = false;
    });
  },
});

export default ArticleCreate.reducer;
