const initialState = {
  menuOpen: false,
  branding: {
    background: '#F0F4D3',
    foreground: '#574827',
    accent: '#66bc30',
    accentReverse: '#bc3630',
  },
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
