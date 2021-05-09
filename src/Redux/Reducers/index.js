import { combineReducers } from "redux";
import gameReducers from "./Game";

const rootReducers = combineReducers({
  ...gameReducers,
});

export default rootReducers;
