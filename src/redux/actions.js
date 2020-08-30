import { TOGGLE_OVERLAY, SET_OVERLAY_TEXT } from "./actionTypes";

export const toggleOverlay = (showOverlay) => ({
  type: TOGGLE_OVERLAY,
  payload: { showOverlay },
});

export const setOverlayText = (text) => ({
  type: SET_OVERLAY_TEXT,
  payload: { text },
});
