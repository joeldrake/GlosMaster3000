export function login() {
  return async (dispatch, getState) => {
    dispatch({
      type: 'LOGIN',
    });
  };
}

export function logout() {
  return async (dispatch, getState) => {
    dispatch({
      type: 'LOGOUT',
    });
  };
}
