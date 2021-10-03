import { PLAYER_X, PLAYER_X_CHOICES, PLAYER_O_CHOICES } from "../types";

export const playerAction = player => {
  return dispatch => {
    return dispatch({
      type: PLAYER_X,
      player: player,
    });
  };
};

export const playerXChoiceAction = choice => {
  return dispatch => {
    return dispatch({
      type: PLAYER_X_CHOICES,
      choice: choice,
    });
  };
};

export const playerOChoiceAction = choice => {
  return dispatch => {
    return dispatch({
      type: PLAYER_O_CHOICES,
      choice: choice,
    });
  };
};
