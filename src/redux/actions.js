import { TOGGLE_OVERLAY, SET_OVERLAY_TEXT, VIEW_CLUE } from "./actionTypes";

export const toggleOverlay = (showOverlay) => ({
  type: TOGGLE_OVERLAY,
  payload: { showOverlay },
});

export const setOverlayText = (text) => ({
  type: SET_OVERLAY_TEXT,
  payload: { text },
});

export const viewClue = (row, col) => ({
  type: VIEW_CLUE,
  payload: { row, col },
});
