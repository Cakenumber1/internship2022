import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

import {fetchArticlesThunk} from './thunks';
type qwe = {
  name: string
  url: string
}
export const articlesEntityAdapter = createEntityAdapter({
  selectId: (article : qwe | any) => article.name,
});

export const articlesSlice = createSlice({
  reducers: {},
  initialState: articlesEntityAdapter.getInitialState(),
  name: 'articles',
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesThunk.fulfilled, (state, action :any) => {
      articlesEntityAdapter.setAll(state, action.payload.results);
    });
  }
});

export const articlesReducer = articlesSlice.reducer;