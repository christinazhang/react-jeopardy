import { TOGGLE_OVERLAY, SET_OVERLAY_TEXT } from "../actionTypes";

const initialState = {
  showOverlay: false,
  text: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_OVERLAY:
      const { showOverlay } = action.payload;
      return {
        ...state,
        showOverlay: showOverlay,
      };
    case SET_OVERLAY_TEXT:
      const { text } = action.payload;
      return {
        ...state,
        text: text,
      };
    default:
      return state;
  }
}
