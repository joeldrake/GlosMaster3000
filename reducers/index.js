import { combineReducers } from 'redux';
import layout from './layoutReducer.js';
import session from './sessionReducer.js';
import lists from './listsReducer.js';
import modal from './modalReducer.js';

export default combineReducers({
  layout,
  session,
  lists,
  modal,
});
