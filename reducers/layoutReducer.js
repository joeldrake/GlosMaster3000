const initialState = {
  menuOpen: false,
};

export default function layout(state = initialState, action) {
  switch (action.type) {
    case 'MENU_TOGGLE':
      return {
        ...state,
        menuOpen: action.menuOpen,
      };
    case 'MENU_OPEN':
      return {
        ...state,
        menuOpen: true,
      };
    case 'MENU_CLOSE':
      return {
        ...state,
        menuOpen: false,
      };
    default:
      return state;
  }
}
