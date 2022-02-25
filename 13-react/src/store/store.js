import {configureStore} from '@reduxjs/toolkit';

import {articlesReducer} from './articles/slice';
import {userReducer} from './user/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    articles: articlesReducer,
  },
  preloadedState: {
    user: 'Oleg',
  },
});
