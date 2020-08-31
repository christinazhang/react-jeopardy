import { UPDATE_SCORE } from "../actionTypes";
import { contestants } from "../../constants";

const initialState = {
  contestants: contestants.map((contestant) => ({
    name: contestant.name,
    imgLink: contestant.imgLink,
    score: 0,
  })),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_SCORE:
      const { index, amount } = action.payload;
      const updatedContestants = state.contestants.map(
        (contestant, contestantIndex) => {
          if (index !== contestantIndex) {
            return contestant;
          }
          return {
            ...contestant,
            score: (contestant.score += Number(amount)),
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
