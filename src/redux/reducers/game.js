import { SINGLE_JEOPARDY } from "../../stageTypes";
import { CHANGE_STAGE } from "../actionTypes";

const initialState = {
  currentStage: SINGLE_JEOPARDY,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_STAGE:
      const { stage } = action.payload;
      return {
        ...state,
        currentStage: stage,
      };
    default:
      return state;
  }
}
