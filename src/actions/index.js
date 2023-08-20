import axios from "axios";
import { options, logos } from "../data";

export const GET_NEXT_GAME = "GET_NEXT_GAME";
export const SET_IS_FETCHING = "SET_IS_FETCHING";
export const NEXT_SUCCESS = "NEXT_SUCCESS";
export const NEXT_ERROR = "NEXT_ERROR";

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

export const getNextGame = () => (dispatch) => {
  dispatch(setIsFetching(true));

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
};

export const setIsFetching = (isFetching) => {
  return {
    type: SET_IS_FETCHING,
    payload: isFetching,
  };
};

export const nextSuccess = () => {};

export const nextError = (error) => {
  return {
    type: NEXT_ERROR,
    payload: error,
  };
};
