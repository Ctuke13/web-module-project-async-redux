import React from "react";
import "./App.css";

import axios from "axios";
import Games from "./components/Games";
import { options } from "./data";

axios
  .get(options.url, { headers: options.headers })
  .then((res) => {
    const teams = res.data.map((team) => {
      console.log(team.away_team);
      return {
        away: team.away_team,
        home: team.home_team,
        awayScore: team.scores[0].score,
        homeScore: team.scores[1].score,
        time: convertTime(team.commence_time),
      };
    });
    dispatch(nextSuccess(teams[0]));
  })
  .catch((err) => dispatch(nextError(err.message)));

function App() {
  return (
    <div className="App">
      <Games />
    </div>
  );
}

export default App;
