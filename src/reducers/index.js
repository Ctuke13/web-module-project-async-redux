import {
  GET_NEXT_GAME,
  SET_IS_FETCHING,
  NEXT_SUCCESS,
  NEXT_ERROR,
} from "../actions";

const initialState = {
  awayTeam: "Tampa Bay Buccaneers",
  awayTeamLogo:
    "https://s.yimg.com/cv/apiv2/default/nfl/20200508/500x500/buccaneers_wbg.png",
  homeTeam: "New York Jets",
  homeTeamLogo:
    "https://1000logos.net/wp-content/uploads/2017/03/New-York-Jets-Logo-1978.png",
  startTime: "August 19th 7pm",
  awayScore: null,
  homeScore: null,
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEXT_GAME:
      return state;
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case NEXT_SUCCESS:
      return {
        ...state,
        awayTeam: action.payload.away,
        homeTeam: action.payload.home,
        awayScore: action.payload.awayScore,
        homeScore: action.payload.homeScore,
        startTime: action.payload.time,
      };
    case NEXT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
  }
};
