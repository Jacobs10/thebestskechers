export const ADD_ITEM = 'ADD_ITEM';
export const SELECT_ITEM = 'SELECT_ITEM';

export function addItem(item) {
  return { type: ADD_ITEM, item };
}

export function selectItem(item) {
  return { type: SELECT_ITEM, item };
}
