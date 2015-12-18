export const ADD_DEVICE = 'ADD_DEVICE';
export const REMOVE_DEVICE = 'REMOVE_DEVICE';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_UPDATED: 'SHOW_UPDATED'
};

export function addDevice(device) {
  return { type: ADD_DEVICE, device }
}

export function removeDevice(index) {
  return { type: REMOVE_DEVICE, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
