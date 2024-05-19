import { api } from "../api/api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSearchProducts: build.query({
      query: (params) => ({
        url: `/products/search`,
        params,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetSearchProductsQuery } = productApi;
