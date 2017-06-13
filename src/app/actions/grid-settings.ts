import * as types from "../constants/ActionTypes";

export function gridSettings(columnCount, rowCount, pixelSize) {
  return {
    type: types.GRID_SETTINGS,
    columnCount: columnCount,
    rowCount: rowCount,
    pixelSize: pixelSize
  }
}