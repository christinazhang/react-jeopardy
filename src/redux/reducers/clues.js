// import { VIEW_CLUE } from "../actionTypes";
// import { categories } from "../../constants";

// const initialState = {
//   categories: categories,
// };

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case VIEW_CLUE:
//       const { row, col } = action.payload;
//       const updatedCategories = state.categories.map(
//         (category, categoryIndex) => {
//           if (categoryIndex !== col) {
//             return category;
//           }
//           const updatedClues = category.clues.map((clue, clueIndex) => {
//             if (clueIndex !== row) {
//               return clue;
//             }
//             return {
//               ...clue,
//               viewed: true,
//             };
//           });
//           return {
//             ...category,
//             clues: updatedClues,
//           };
//         }
//       );
//       return {
//         ...state,
//         categories: updatedCategories,
//       };
//     default:
//       return state;
//   }
// }
