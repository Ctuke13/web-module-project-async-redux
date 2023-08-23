import { connect } from "react-redux";
import React, { useEffect } from "react";
import Game from "./Game";
import { getNextGame, loadData } from "../actions";

const Games = (props) => {
  console.log(props);
  useEffect(() => {
    console.log("Reached here");
    props.loadData();
    console.log(props);
  }, []);

  return (
    <div className="games-container">
      <h1>Games</h1>
      <Game />
      <button>Previous Game</button>&nbsp;
      <button onClick={() => props.getNextGame()}>Next Game</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    games: state.games,
  };
};

export default connect(mapStateToProps, { getNextGame, loadData })(Games);
