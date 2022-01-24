export function loginAction(inputText) {
  return {
    type: 'user.LOGIN',
    payload: inputText,
  };
}

export function logoutAction() {
  return {
    type: 'user.LOGOUT',
    payload: null,
  };
}
