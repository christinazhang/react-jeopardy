import { TOGGLE_OVERLAY, SET_ACTIVE_CLUE, UPDATE_SCORE } from "./actionTypes";

export const toggleOverlay = (showOverlay) => ({
  type: TOGGLE_OVERLAY,
  payload: { showOverlay },
});

export const setActiveClue = (clue) => ({
  type: SET_ACTIVE_CLUE,
  payload: { clue },
});

export const updateScore = (index, amount) => ({
  type: UPDATE_SCORE,
  payload: { index, amount },
});

// export const viewClue = (row, col) => ({
//   type: VIEW_CLUE,
//   payload: { row, col },
// });
