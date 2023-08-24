import { connect } from "react-redux";
import React, { useEffect } from "react";
import Game from "./Game";
import { getNextGame, loadData, getPrevGame } from "../actions";

const Games = (props) => {
  useEffect(() => {
    props.loadData();
  }, []);

  useEffect(() => {
    // Update the active game whenever it changes
    if (props.games.length > 0) {
      const activeGame = props.games[props.activeGame];
    }
  }, [props.activeGame, props.games]);

  return (
    <div className="games-container">
      <h1>Games</h1>
      <Game />
      <button onClick={() => props.getPrevGame()}>Previous Game</button>&nbsp;
      <button onClick={() => props.getNextGame()}>Next Game</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    games: state.games,
    activeGame: state.activeGame,
  };
};

export default connect(mapStateToProps, { getNextGame, loadData, getPrevGame })(
  Games
);
