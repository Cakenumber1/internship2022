import {createAsyncThunk} from '@reduxjs/toolkit';

import {fetchDataFromServer} from "../../fakeServer/fetch/fetchFunctions";

export const fetchArticlesThunk = createAsyncThunk(
    'articles/fetchArticlesThunk',
    async (_, {dispatch}) => {
      const response = await fetchDataFromServer();
      return response;
    });
