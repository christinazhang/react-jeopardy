import { UPLOAD_FILES, SINGLE_JEOPARDY } from "../../stageTypes";
import {
  CHANGE_STAGE,
  UPLOAD_CONFIG,
  UPDATE_SCORE,
  SET_CLUE_VIEWED,
} from "../actionTypes";

const initialState = {
  currentStage: UPLOAD_FILES,
  contestants: [],
  singleJeopardyCategories: [],
  doubleJeopardyCategories: [],
};

const updateClueViewed = (categories, categoryIndex, clueIndex) =>
  categories.map((category, currentCategoryIndex) => {
    if (currentCategoryIndex !== categoryIndex) return category;
    const updatedClues = category.clues.map((clue, currentClueIndex) => {
      if (currentClueIndex !== clueIndex) return clue;
      return { ...clue, viewed: true };
    });
    return {
      ...category,
      clues: updatedClues,
    };
  });

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
          if (index !== contestantIndex) return contestant;
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

    case SET_CLUE_VIEWED:
      const { categoryIndex, clueIndex } = action.payload;
      if (state.currentStage === SINGLE_JEOPARDY) {
        return {
          ...state,
          singleJeopardyCategories: updateClueViewed(
            state.singleJeopardyCategories,
            categoryIndex,
            clueIndex
          ),
        };
      }
      return {
        ...state,
        doubleJeopardyCategories: updateClueViewed(
          state.doubleJeopardyCategories,
          categoryIndex,
          clueIndex
        ),
      };
    default:
      return state;
  }
}
