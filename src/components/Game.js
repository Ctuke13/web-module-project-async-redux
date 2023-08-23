import React from "react";
import { connect } from "react-redux";
import { logos } from "../data";

const Game = (props) => {
  console.log(props);
  const logos = props.logos;
  const activeGameIndex = props.activeGame;
  const activeGame = props.games[activeGameIndex];
  console.log(props.games[activeGameIndex]);
  const awayTeam = activeGame.away_team;
  const homeTeam = activeGame.home_team;

  console.log(logos[awayTeam]);
  console.log(logos[homeTeam]);
  return (
    props.games.length > 0 && (
      <div className="game-container">
        <h2>
          {" "}
          {activeGame.away_team ?? props.games} vs.{" "}
          {activeGame.home_team ?? props.games}
        </h2>
        <img src={logos[activeGame.away_team]} />
        <h4>
          {props.awayScore}-{props.homeScore}
        </h4>
        <h4>{props.startTime}</h4>
      </div>
    )
  );
};

const mapStateToProps = (state) => {
  return {
    games: state.games,
    activeGame: state.activeGame,
    logos: logos,
  };
};

export default connect(mapStateToProps, {})(Game);
