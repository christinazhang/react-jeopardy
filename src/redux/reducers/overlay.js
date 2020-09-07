import { TOGGLE_OVERLAY, SET_ACTIVE_CLUE } from "../actionTypes";

const initialState = {
  showOverlay: false,
  activeClue: { text: "", value: 0 },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_OVERLAY:
      const { showOverlay } = action.payload;
      return {
        ...state,
        showOverlay: showOverlay,
      };
    case SET_ACTIVE_CLUE:
      const { clue, value } = action.payload;
      return {
        ...state,
        activeClue: {
          ...clue,
          value: value,
        },
      };
    default:
      return state;
  }
}
