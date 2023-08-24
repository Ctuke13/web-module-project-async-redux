import React from "react";
import { connect } from "react-redux";
import { logos } from "../data";
import "../index.css";

function convertTime(isoString) {
  const date = new Date(isoString);

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(date.getUTCDate()).padStart(2, "0");

  let hours = date.getUTCHours();
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  const amOrPm = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour format to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  return `${month}/${day}/${year} ${hours}:${minutes}${amOrPm}`;
}

const Game = (props) => {
  const logos = props.logos;
  const activeGameIndex = props.activeGame;
  const activeGame = props.games[activeGameIndex];
  const awayTeam = activeGame?.away_team;
  const homeTeam = activeGame?.home_team;
  const time = activeGame?.commence_time;
  return (
    props.games.length > 0 && (
      <div className="game-container">
        <h2>
          {activeGame
            ? `${awayTeam ?? "Away Team"} vs. ${homeTeam ?? "Home Team"}`
            : "Game has yet to begin"}
        </h2>
        {activeGame ? (
          <>
            <img className="img-container" src={logos[awayTeam]} />
            <img className="img-container" src={logos[homeTeam]} />
            <h4>
              {activeGame.scores
                ? activeGame.scores[0]?.score - activeGame.scores[1]?.score
                : "No Score Available"}
            </h4>
            <h4>{convertTime(time)}</h4>
          </>
        ) : (
          <p>No game details available</p>
        )}
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
