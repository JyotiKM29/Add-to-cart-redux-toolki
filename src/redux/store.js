import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slices/cartSlice";

export  const store = configureStore({
  reducer: {
    cart: cardReducer,
  },

  devTools: true,
});
