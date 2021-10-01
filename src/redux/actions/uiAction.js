import { POPUP_NAME } from "../types";

export const popupAction = (name) => {
  return (dispatch) => {
    return dispatch({
      type: POPUP_NAME,
      popupName: name,
    });
  };
};
