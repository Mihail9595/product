import { createApi, fetchBaseQuery,  } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl:"http://api.escuelajs.co/api/v1" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ({ id }) => `/products/${id}`,
      providesTags: ["Product"],
    }),
  }),
});
export const { useGetProductQuery } = apiSlice;
