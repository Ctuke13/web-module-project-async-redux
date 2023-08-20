import React from "react";
import { connect } from "react-redux";

const Game = (props) => {
  return (
    <div className="game-container">
      <h2> props.awayTeam vs. props.homeTeam</h2>
      <h4>Scores</h4>
      <h4>Time</h4>
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
    awayScore: state.awayScore,
    homeScore: state.homeScore,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(Game);
