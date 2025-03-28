import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
});


