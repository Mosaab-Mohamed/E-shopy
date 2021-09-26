import { combineReducers } from "redux";
import { products, watchedProduct } from "./productsReducer";
import { cart } from "./cartReducer";
import { wishlist } from "./wishlistReducer";
import { message } from "./messageReducer";

export const reducers = combineReducers({
  products,
  watchedProduct,
  cart,
  wishlist,
  message,
});
