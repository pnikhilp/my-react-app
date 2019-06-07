import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import todos from './todos';
import visibilityFilter from './visibilityFilter';
import streamReducer from './streams';
export default combineReducers({
  todos,
  visibilityFilter,
  form: formReducer,
  streams: streamReducer,
})