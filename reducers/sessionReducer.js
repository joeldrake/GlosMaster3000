const initialState = {
  loggedIn: false,
  logToConsole: false,
  siteUrl: null,
};

export default function session(state = initialState, action) {
  switch (action.type) {
    case 'LOGOUT':
      return {
        ...state,
        loggedIn: false,
      };
    case 'LOGIN':
      return {
        ...state,
        loggedIn: true,
      };
    case 'SITE_URL':
      return {
        ...state,
        siteUrl: action.siteUrl,
      };
    default:
      return state;
  }
}
