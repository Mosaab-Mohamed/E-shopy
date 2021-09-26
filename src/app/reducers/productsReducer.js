import { FETCH_PRODUCTS, WATCH_PRODUCT } from "../actions/types";

export const products = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

export const watchedProduct = (state = null, action) => {
  switch (action.type) {
    case WATCH_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};
