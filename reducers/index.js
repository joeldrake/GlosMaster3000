import { combineReducers } from 'redux';
import layout from './layoutReducer';
import session from './sessionReducer';
import modal from './modalReducer';

export default combineReducers({
  layout,
  session,
  modal,
});
