import { combineReducers } from 'redux';
import * as ActionTypes from '../actions';
import { routerReducer as routing } from 'react-router-redux';

const initialState = {
  items: ['Bursts', 'Equalizer 2.0', 'Energy Afterburn']
};

function activeShoe(state = null, action) {
  switch (action.type) {
  case ActionTypes.SELECT_ITEM:
    return { shoe: action.item };
  default:
    return state;
  }
}

function list(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.ADD_ITEM:
    return { items: state.items.concat(action.item) };
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  list,
  activeShoe,
  routing
});

export default rootReducer;
