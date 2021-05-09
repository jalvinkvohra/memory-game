import {
  INIT_GAME,
  SET_CARDS,
  SET_MATCHED,
  SET_SCORE,
  UPDATE_SCORE,
} from "../action_types";

export function initGame() {
  return {
    type: INIT_GAME,
  };
}

export function setCards(cards) {
  return {
    type: SET_CARDS,
    cards,
  };
}

export function setMatched(matched = 0) {
  return {
    type: SET_MATCHED,
    matched,
  };
}

export function setScore(score) {
  return {
    type: SET_SCORE,
    score,
  };
}

export function updateScore() {
  return {
    type: UPDATE_SCORE,
  };
}
