import { combineReducers } from 'redux';
import layout from './layoutReducer.js';
import modal from './modalReducer.js';
import session from './sessionReducer.js';
import quiz from './quizReducer.js';

export default combineReducers({
  layout,
  modal,
  session,
  quiz,
});
