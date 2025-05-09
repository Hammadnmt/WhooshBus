import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuth } from "firebase/auth";
import { auth } from "../config/firebase";

const baseApi = fetchBaseQuery({
  baseUrl: "http://localhost:3000/api",
  credentials: "include",
  prepareHeaders: async (headers) => {
    const user = auth.currentUser;
    if (user) {
      const token = await user.getIdToken();
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseApi,
  tagTypes: ["User", "Bus", "Trip", "Booking", "Route"],
  endpoints: () => ({}),
});

export const { reducer: apiReducer, middleware: apiMiddleware } = api;
