import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './products/productsSlice';
import { apiSlice } from './api/apiSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
