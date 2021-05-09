import { setCards, setMatched, updateScore } from "../Actions/Game";
import { cards } from "../data";

let selectedCards = [];

export const initCards = () => {
  return (dispatch) => {
    dispatch(setCards(cards.sort(() => 0.5 - Math.random())));
  };
};

export const setSelectedCard = (card) => {
  return (dispatch) => {
    selectedCards.push(card);
    if (selectedCards.length === 2) {
      setTimeout(() => {
        dispatch(matchCards());
      }, 500);
    }
  };
};

export const matchCards = () => {
  return (dispatch) => {
    if (selectedCards[0].name === selectedCards[1].name) {
      console.log("You have got a match");
      dispatch(setMatched(1));
      dispatch(updateScore());
    } else {
      console.log("Please try again");
      dispatch(setMatched(-1));
    }

    selectedCards = [];
  };
};

export default initCards;
