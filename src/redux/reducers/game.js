import { UPLOAD_FILES } from "../../stageTypes";
import { CHANGE_STAGE, UPLOAD_CONFIG, UPDATE_SCORE } from "../actionTypes";

const initialState = {
  currentStage: UPLOAD_FILES,
  contestants: [],
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
    case UPLOAD_CONFIG:
      const { config } = action.payload;
      return {
        ...state,
        contestants: config.contestants,
        singleJeopardyCategories: config.singleJeopardy,
        doubleJeopardyCategories: config.doubleJeopardy,
      };

    case UPDATE_SCORE:
      const { index, amount } = action.payload;
      const updatedContestants = state.contestants.map(
        (contestant, contestantIndex) => {
          if (index !== contestantIndex) {
            return contestant;
          }
          const currentScore = contestant.score ?? 0;
          return {
            ...contestant,
            score: currentScore + Number(amount),
          };
        }
      );
      return {
        ...state,
        contestants: updatedContestants,
      };
    default:
      return state;
  }
}
