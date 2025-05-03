import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = fetchBaseQuery({
  baseUrl: "http://localhost:3000/api",
  credentials: "include",
});

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseApi,
  tagTypes: ["User", "Bus", "Trip", "Booking", "Route"],
  endpoints: () => ({}),
});

export const { reducer: apiReducer, middleware: apiMiddleware } = api;
