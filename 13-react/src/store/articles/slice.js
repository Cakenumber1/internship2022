import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

import {fetchArticlesThunk} from './thunks';

export const articlesEntityAdapter = createEntityAdapter({
  selectId: (article) => article.name,
});

export const articlesSlice = createSlice({
  initialState: articlesEntityAdapter.getInitialState(),
  name: 'articles',
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesThunk.fulfilled, (state, action) => {
      articlesEntityAdapter.setAll(state, action.payload);
    });
  },
});

export const articlesReducer = articlesSlice.reducer;
