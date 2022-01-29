const initialState = {
  user: 'Oleg',
};

function updateUserReducer(state = '', action) {
  return action.payload;
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ('user.LOGIN'):
      return {
        ...state,
        user: updateUserReducer(state.user, action),
      };
    case ('user.RENAME'):
      return {
        ...state,
        user: updateUserReducer(state.user, action),
      };
    case ('user.LOGOUT'):
      return {
        ...state,
        user: updateUserReducer(state.user, action),
      };
  }
  return state;
}


