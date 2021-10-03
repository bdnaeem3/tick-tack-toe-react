import { PLAYER_X, PLAYER_X_CHOICES, PLAYER_O_CHOICES } from "../types";

const initialState = {
  isPlayerX: true,
  playerXChoices: [],
  playerOChoices: [],
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
    default:
      return state;
  }
};

export default gameReducer;
