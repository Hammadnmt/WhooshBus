/* eslint-disable no-unused-vars */
import { api } from "../baseApi";

const tripApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createTrip: builder.mutation({
      query: (data) => ({
        url: "/trip/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Trip"], // Invalidate "Trip" cache after creating a trip
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data,
    }),
    getTrips: builder.query({
      query: () => ({
        url: "/trip/",
        method: "GET",
      }),
      providesTags: ["Trip"], // Provide "Trip" cache for trips
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data,
    }),
    getPaginatedTrips: builder.query({
      query: ({ page, limit }) => ({
        url: `/trip/trip/?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["Trip"], // Provide "Trip" cache for trips
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data,
    }),
    getTripById: builder.query({
      query: (id) => ({
        url: `/trip/${id}`,
        method: "GET",
      }),
      providesTags: ["Trip"], // Provide "Trip" cache for trip
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data,
    }),
    getTripByRoute: builder.query({
      query: ({ to, from, date }) => ({
        url: `/trip/search?to=${to}&from=${from}&date=${date}`,
        method: "GET",
      }),
      providesTags: ["Trip"], // Provide "Trip" tag for route queries
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data,
    }),
    deleteTrip: builder.mutation({
      query: (id) => ({
        url: `/trip/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Trip"],
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.status,
    }),
    updateTrip: builder.mutation({
      query: ({ id, data }) => ({
        url: `/trip/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Trip"],
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.status,
    }),
  }),
});

export const {
  useCreateTripMutation,
  useGetTripsQuery,
  useGetTripByIdQuery,
  useDeleteTripMutation,
  useUpdateTripMutation,
  useGetPaginatedTripsQuery,
  useLazyGetTripByRouteQuery,
} = tripApi;
