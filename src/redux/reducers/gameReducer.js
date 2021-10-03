import {
  PLAYER_X,
  PLAYER_X_CHOICES,
  PLAYER_O_CHOICES,
  WINNER,
  REFRESH,
} from "../types";

const initialState = {
  isPlayerX: true,
  playerXChoices: [],
  playerOChoices: [],
  winner: "",
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_X:
      return {
        ...state,
        isPlayerX: action.player,
      };
    case PLAYER_X_CHOICES:
      return {
        ...state,
        playerXChoices: [...state.playerXChoices, action.choice],
      };
    case PLAYER_O_CHOICES:
      return {
        ...state,
        playerOChoices: [...state.playerOChoices, action.choice],
      };
    case WINNER:
      return {
        ...state,
        winner: action.winner,
      };
    case REFRESH:
      return initialState;
    default:
      return state;
  }
};

export default gameReducer;
