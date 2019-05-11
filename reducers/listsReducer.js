const initialState = {
  lists: null,
  listCurrent: null,
};

export default function lists(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_LISTS':
      return {
        ...state,
        lists: action.lists,
      };
    case 'UPDATE_LIST_CURRENT':
      return {
        ...state,
        listCurrent: action.listCurrent,
      };
    default:
      return state;
  }
}
