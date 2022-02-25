import {articlesEntityAdapter} from './slice';

export const {
  selectIds: articlesIDsSelector,
  selectById: articleByIDSelector,
} = articlesEntityAdapter.getSelectors((state : any) => state.articles);
