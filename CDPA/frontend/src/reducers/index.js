import { combineReducers } from 'redux';
import predictions from './predictions';
import errors from './errors';
import messages from './messages';

export default combineReducers({
  predictions,
  errors,
  messages
});