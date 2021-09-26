import {
  ADD_TO_WISHLIST,
  DELETE_FROM_WISHLIST,
  UPDATE_WISHLIST_FROM_LOCALSTORAGE,
} from "../actions/types";

export const wishlist = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_FROM_WISHLIST:
      const { [action.payload.id]: omit, ...restItems } = state;
      return { ...restItems };
    case UPDATE_WISHLIST_FROM_LOCALSTORAGE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
