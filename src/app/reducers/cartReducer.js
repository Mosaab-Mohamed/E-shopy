import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  INCREASE_ITEM,
  DECREASE_ITEM,
  UPDATE_CART_FROM_LOCALSTORAGE,
} from "../actions/types";

const initialCart = {
  items: {},
  count: 0,
  total: 0,
};

export const cart = (state = initialCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { product, quantity } = action.payload;

      return {
        items: { ...state.items, [product.id]: { ...product, quantity } },
        count:
          Object.values(state.items).reduce((accumulator, item) => {
            return accumulator + item.quantity;
          }, 0) + quantity,
        total:
          Object.values(state.items).reduce((accumulator, item) => {
            return (
              accumulator +
              (item.price.offer
                ? item.price.offer.sale * item.quantity
                : item.price.normal * item.quantity)
            );
          }, 0) +
          (product.price.offer
            ? product.price.offer.sale * quantity
            : product.price.normal * quantity),
      };

    case INCREASE_ITEM:
      return {
        items: {
          ...state.items,
          [action.payload.id]: {
            ...action.payload,
            quantity: state.items[action.payload.id].quantity + 1,
          },
        },
        count: state.count + 1,
        total:
          state.total +
          (action.payload.price.offer
            ? action.payload.price.offer.sale
            : action.payload.price.normal),
      };

    case DECREASE_ITEM:
      return {
        items: {
          ...state.items,
          [action.payload.id]: {
            ...action.payload,
            quantity: state.items[action.payload.id].quantity - 1,
          },
        },
        count: state.count - 1,
        total:
          state.total -
          (action.payload.price.offer
            ? action.payload.price.offer.sale
            : action.payload.price.normal),
      };

    case DELETE_FROM_CART:
      const { [action.payload.id]: omit, ...restItems } = state.items;
      return {
        items: { ...restItems },
        count: state.count - 1,
        total:
          state.total -
          (action.payload.price.offer
            ? action.payload.price.offer.sale
            : action.payload.price.normal) *
            state.items[action.payload.id].quantity,
      };
    case UPDATE_CART_FROM_LOCALSTORAGE:
      return {
        items: { ...action.payload.items },
        count: action.payload.count,
        total: action.payload.total,
      };
    default:
      return state;
  }
};
