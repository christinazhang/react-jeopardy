import { UPLOAD_FILES } from "../../stageTypes";
import {
  CHANGE_STAGE,
  UPLOAD_SINGLE_JEOPARDY,
  UPLOAD_DOUBLE_JEOPARDY,
} from "../actionTypes";

const initialState = {
  currentStage: UPLOAD_FILES,
  singleJeopardyCategories: [],
  doubleJeopardyCategories: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_STAGE:
      const { stage } = action.payload;
      return {
        ...state,
        currentStage: stage,
      };
    case UPLOAD_SINGLE_JEOPARDY:
      const { singleJeopardyCategories } = action.payload;
      return {
        ...state,
        singleJeopardyCategories: singleJeopardyCategories,
      };
    case UPLOAD_DOUBLE_JEOPARDY:
      const { doubleJeopardyCategories } = action.payload;
      return {
        ...state,
        doubleJeopardyCategories: doubleJeopardyCategories,
      };
    default:
      return state;
  }
}
