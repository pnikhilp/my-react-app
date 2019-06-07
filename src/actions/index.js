import streams from '../api/streams';
import history from '../history';
import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM,
} from './types';
let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const createStreams = formValues => async (dispatch, getState) => {
  console.log('GETSTATE*****', getState);
 const response = await streams.post('/streams', formValues);
 dispatch({type: CREATE_STREAM, payload: response.data})
 history.push('/')
}

export const fetchStreams = () => async dispatch =>{
  const response = await streams.get('/streams');
  dispatch({ type: FETCH_STREAMS, payload: response.data});
}

export const fetchStream = id => async dispatch =>{
  const response = await streams.get(`/streams/${id}`)
  dispatch({ type: FETCH_STREAM, payload: response.data });
}

export const editStream = (id, formValues) => async dispatch =>{
  const response = await streams.patch(`/streams/${id}`, formValues)
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push('/')
}

export const deleteStream = id => async dispatch =>{
  await streams.delete(`/streams/${id}`)
  dispatch({ type: DELETE_STREAM, payload: id });
}