import { connect } from "react-redux";
import React from "react";
import Game from "./Game";
import { getNextGame } from "../actions";

const Games = (props) => {
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
  return {
    awayTeam: state.awayTeam,
    awayTeamLogo: state.Game,
    homeTeam: state.homeTeam,
    homeTeamLogo: state.homeTeamLogo,
    startTime: state.startTime,
    scores: state.scores,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getNextGame })(Games);
