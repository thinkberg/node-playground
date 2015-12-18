import { combineReducers } from 'redux'
import { ADD_DEVICE, REMOVE_DEVICE, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function devices(state = [], action) {
  switch (action.type) {
    case ADD_DEVICE:
      return [
        ...state,
        {
          name: action.device.name,
          description: action.device.description,
          updated: false
        }
      ];
    case REMOVE_DEVICE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

const reducers = combineReducers({
  visibilityFilter,
  devices
});

export default reducers;
