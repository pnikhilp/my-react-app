import _ from 'lodash';
import {
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM,
    SHOW_LIST,
  } from '../actions/types';

const INITIAL_STATE = {};

const streamReducer = (state = INITIAL_STATE, action) =>{
   switch(action.type){
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_STREAMS: 
            return { ...action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        case SHOW_LIST:
            return { ...action.payload }
        default:
            return state;
   }
}

export default streamReducer;