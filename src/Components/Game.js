import React from "react";
import { connect } from "react-redux";
import { initGame } from "../Redux/Actions/Game";
import Score from "./Score";
import Grid from "./Grid";
import initCards from "../Redux/Middlewares/Game";

class Game extends React.Component {
  componentDidMount() {
    const { startGame, initCards } = this.props;

    startGame();
    initCards();
  }

  render() {
    return (
      <div className="game">
        <Grid />
        <Score />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch(initGame),
    initCards: () => dispatch(initCards()),
  };
};

export default connect(null, mapDispatchToProps)(Game);
