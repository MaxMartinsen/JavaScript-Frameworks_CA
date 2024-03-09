import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, ONLINE_SHOP } from '../../utils/constants';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ({ id }) => (id ? `${ONLINE_SHOP}/${id}` : null),
      providesTags: ['Product'],
    }),
  }),
});

export const { useGetProductQuery } = apiSlice;
