import { POPUP_NAME } from "../types";

const initialState = {
  popupName: "",
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPUP_NAME:
      return {
        ...state,
        popupName: action.popupName,
      };
    default:
      return state;
  }
};

export default uiReducer;
