import {
  FETCH_PRODUCTS,
  WATCH_PRODUCT,
  ADD_TO_CART,
  INCREASE_ITEM,
  DECREASE_ITEM,
  DELETE_FROM_CART,
  ADD_TO_WISHLIST,
  DELETE_FROM_WISHLIST,
  SET_MESSAGE,
  UPDATE_CART_FROM_LOCALSTORAGE,
  UPDATE_WISHLIST_FROM_LOCALSTORAGE,
} from "./types";

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await fetch("./Data.json");

    const data = await response.json();

    dispatch({ type: FETCH_PRODUCTS, payload: data });
  };
};

export const watchProduct = (product) => {
  return {
    type: WATCH_PRODUCT,
    payload: product,
  };
};

export const addToCart = (product, quantity = 1) => {
  return {
    type: ADD_TO_CART,
    payload: { product, quantity },
  };
};

export const increaseItem = (product) => {
  return {
    type: INCREASE_ITEM,
    payload: product,
  };
};

export const decreaseItem = (product) => {
  return {
    type: DECREASE_ITEM,
    payload: product,
  };
};

export const deleteFromCart = (product) => {
  return {
    type: DELETE_FROM_CART,
    payload: product,
  };
};

export const addToWishlist = (product) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: product,
  };
};

export const deleteFromWishlist = (product) => {
  return {
    type: DELETE_FROM_WISHLIST,
    payload: product,
  };
};

export const setMessage = (message) => {
  return {
    type: SET_MESSAGE,
    payload: message,
  };
};

export const updateCartFromLocalStorage = (cart) => {
  return {
    type: UPDATE_CART_FROM_LOCALSTORAGE,
    payload: cart,
  };
};

export const updateWishlistFromLocalStorage = (wishlist) => {
  return {
    type: UPDATE_WISHLIST_FROM_LOCALSTORAGE,
    payload: wishlist,
  };
};
