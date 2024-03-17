import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, ONLINE_SHOP } from '../../utils/constants';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Product', 'Products'],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ({ id }) => (id ? `${ONLINE_SHOP}/${id}` : null),
      providesTags: ['Product'],
    }),
    getProducts: builder.query({
      query: () => ONLINE_SHOP,
      providesTags: ['Products'],
    }),
  }),
});

export const { useGetProductQuery, useGetProductsQuery } = apiSlice;
