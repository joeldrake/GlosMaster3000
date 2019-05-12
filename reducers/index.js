import { combineReducers } from 'redux';
import game from './gameReducer.js';
import layout from './layoutReducer.js';
import modal from './modalReducer.js';
import session from './sessionReducer.js';

export default combineReducers({
  game,
  layout,
  modal,
  session,
});
