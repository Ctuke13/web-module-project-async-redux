import {
  GET_NEXT_GAME,
  GET_PREV_GAME,
  SET_IS_FETCHING,
  NEXT_SUCCESS,
  NEXT_ERROR,
  LOAD_SUCCESS,
} from "../actions";

const initialState = {
  games: [],
  activeGame: 0,
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEXT_GAME:
      return { ...state, activeGame: state.activeGame + 1 };
    case GET_PREV_GAME:
      return { ...state, activeGame: state.activeGame - 1 };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case NEXT_SUCCESS:
      return {
        ...state,
        activeGame: action.payload,
      };
    case NEXT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        games: action.payload,
      };

    default:
      return state;
  }
};
