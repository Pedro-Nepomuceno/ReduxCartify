import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartItems";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
