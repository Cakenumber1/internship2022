import {createSelector} from 'reselect';

function baseSelector(state) {
  return state;
}
export const userSelector = createSelector(baseSelector, (state) => state.user);
