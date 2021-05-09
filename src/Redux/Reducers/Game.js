import {
  INIT_GAME,
  SET_CARDS,
  SET_MATCHED,
  SET_SCORE,
  UPDATE_SCORE,
} from "../action_types";

function game(state = {}, action) {
  switch (action.type) {
    case INIT_GAME:
      return { started: true };
    default:
      return state;
  }
}

function cards(state = [], action) {
  switch (action.type) {
    case SET_CARDS:
      return action.cards;
    default:
      return state;
  }
}

function matched(state = false, action) {
  switch (action.type) {
    case SET_MATCHED:
      return action.matched;
    default:
      return state;
  }
}

function score(state = 0, action) {
  switch (action.type) {
    case SET_SCORE:
      return action.score;
    case UPDATE_SCORE:
      return state + 1;
    default:
      return state;
  }
}

const gameReducers = {
  game,
  cards,
  matched,
  score,
};

export default gameReducers;
