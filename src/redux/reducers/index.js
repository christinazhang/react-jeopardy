import { combineReducers } from "redux";
import overlay from "./overlay";
// import clues from "./clues";
import contestants from "./contestants";
import game from "./game";

export default combineReducers({ overlay, contestants, game });
