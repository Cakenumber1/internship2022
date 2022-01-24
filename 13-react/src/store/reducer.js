const initialState = {
  user: 'Oleg',
};

function updateUserReducer(state = '', action) {
  return action.payload;
}

export function rootReducer(state = initialState, action) {
  if (action.type === 'user.LOGIN') {
    return {
      ...state,
      user: updateUserReducer(state.user, action),
    };
  } else if (action.type === 'user.LOGOUT') {
    return {
      ...state,
      user: updateUserReducer(state.user, action),
    };
  }
  return state;
}
