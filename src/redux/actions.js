import {
  TOGGLE_OVERLAY,
  SET_ACTIVE_CLUE,
  UPDATE_SCORE,
  CHANGE_STAGE,
  UPLOAD_CONFIG,
} from "./actionTypes";

export const toggleOverlay = (showOverlay) => ({
  type: TOGGLE_OVERLAY,
  payload: { showOverlay },
});

export const setActiveClue = (clue, value) => ({
  type: SET_ACTIVE_CLUE,
  payload: { clue, value },
});

export const updateScore = (index, amount) => ({
  type: UPDATE_SCORE,
  payload: { index, amount },
});

export const changeStage = (stage) => ({
  type: CHANGE_STAGE,
  payload: { stage },
});
export const uploadConfig = (config) => ({
  type: UPLOAD_CONFIG,
  payload: { config },
});

// export const viewClue = (row, col) => ({
//   type: VIEW_CLUE,
//   payload: { row, col },
// });
