import * as types from "../constants/ActionTypes";

const initialGridSettings = {
    column: 20,
    row: 20,
    pixelSize: 20
};

export const gridSettings = (state = initialGridSettings, action) => {
  switch(action.type) {
  case types.COLUMN_COUNT:
      return Object.assign({}, state, {
          column: action
      });
  case types.ROW_COUNT:
      return Object.assign({}, state, {
          row: action
      });
  case types.PIXEL_SIZE:
      return Object.assign({}, state, {
          pixelSize: action
      });
  default:
      return state;
  }
}