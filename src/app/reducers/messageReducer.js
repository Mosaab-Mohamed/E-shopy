import { SET_MESSAGE } from "../actions/types";

export const message = (state = null, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};
