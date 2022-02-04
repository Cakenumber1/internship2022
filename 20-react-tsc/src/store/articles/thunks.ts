import {createAsyncThunk} from '@reduxjs/toolkit';

import articlesData from '../../fakeServer/articles.json';
import {fetchDataWithDelay} from '../../fakeServer/fetch/fetchFunctions';

export const fetchArticlesThunk = createAsyncThunk(
    'articles/fetchArticlesThunk',
    async (_, {dispatch}) => {
      const response = await fetchDataWithDelay(articlesData);
      return await response;
    });
