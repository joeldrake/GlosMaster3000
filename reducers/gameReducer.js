const initialState = {
  gameActive: null,
  lists: null,
  listsLoaded: false,
};

export default function game(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_LISTS':
      return {
        ...state,
        lists: action.lists,
        listsLoaded: true,
      };
    case 'UPDATE_GAME_ACTIVE':
      return {
        ...state,
        gameActive: action.gameActive,
      };
    default:
      return state;
  }
}
