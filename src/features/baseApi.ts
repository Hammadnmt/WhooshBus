import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = fetchBaseQuery({
  baseUrl: "https://buspro-backend-production.up.railway.app/",
  credentials: "include",
});

const api = createApi({
  baseQuery: baseApi,
  tagTypes: ["User", "Bus", "Trip", "Booking", "Route"],
  endpoints: () => ({}),
});

export const { reducer: apiReducer, middleware: apiMiddleware } = api;
