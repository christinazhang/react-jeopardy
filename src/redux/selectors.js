import {
  SINGLE_JEOPARDY,
  DOUBLE_JEOPARDY,
  FINAL_JEOPARDY,
} from "../stageTypes";

export const getAllContestants = (store) => store.contestants.contestants;
export const getCurrentStage = (store) => store.game.currentStage;
export const getCurrentCategories = (store) => {
  switch (getCurrentStage(store)) {
    case SINGLE_JEOPARDY:
      return store.game.singleJeopardyCategories;
    case DOUBLE_JEOPARDY:
      return store.game.doubleJeopardyCategories;
    default:
      return [];
  }
};
