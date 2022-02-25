import {articlesEntityAdapter} from './slice';

export const {
  selectIds: articlesIDsSelector,
  selectById: articleByIDSelector,
} = articlesEntityAdapter.getSelectors((state) => state.articles);

