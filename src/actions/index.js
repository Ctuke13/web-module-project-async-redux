import axios from "axios";
import { options, logos } from "../data";
import { getState } from "redux-thunk";

export const LOAD_DATA = "LOAD_DATA";
export const GET_NEXT_GAME = "GET_NEXT_GAME";
export const GET_PREV_GAME = "GET_PREV_GAME";
export const SET_IS_FETCHING = "SET_IS_FETCHING";
export const NEXT_SUCCESS = "NEXT_SUCCESS";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const NEXT_ERROR = "NEXT_ERROR";

export const loadData = () => (dispatch) => {
  dispatch(setIsFetching(true));
  axios
    .get(options.url, { headers: options.headers })
    .then((res) => {
      const games = res.data;
      console.log(games);
      dispatch(loadSuccess(games));
    })
    .catch((err) => dispatch(nextError(err.message)));
};

export const loadSuccess = (games) => {
  return {
    type: LOAD_SUCCESS,
    payload: games,
  };
};

export const getNextGame = () => (dispatch, getState) => {
  dispatch(setIsFetching(true));
  const { activeGame, games } = getState();
  if (activeGame < games.length - 1) {
    dispatch(nextSuccess(activeGame + 1));
  } else {
    dispatch(nextError("No more games available"));
  }

  return {
    type: GET_NEXT_GAME,
    payload: activeGame,
  };
};

export const getPrevGame = () => (dispatch, getState) => {
  dispatch(setIsFetching(true));
  const { activeGame, games } = getState();
  if (activeGame > 0) {
    dispatch(nextSuccess(activeGame - 1));
  } else {
    dispatch(nextError("No more games available"));
  }

  return {
    type: GET_NEXT_GAME,
    payload: activeGame,
  };
};

export const setIsFetching = (isFetching) => {
  return {
    type: SET_IS_FETCHING,
    payload: isFetching,
  };
};

export const nextSuccess = (activeGame) => {
  return {
    type: NEXT_SUCCESS,
    payload: activeGame,
  };
};

export const nextError = (error) => {
  return {
    type: NEXT_ERROR,
    payload: error,
  };
};
