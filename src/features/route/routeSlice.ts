/* eslint-disable no-unused-vars */
import { api } from "../baseApi";

export const routeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllroutes: builder.query({
      query: () => ({
        url: "/route/",
        method: "GET",
      }),
      providesTags: ["Route"], // Provide "Route" cache for all routes
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data,
    }),
    getPaginatedRoutes: builder.query({
      query: ({ page, limit }) => ({
        url: `/route/route/?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["Route"], // Provide "Route" cache for all routes
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data,
    }),
    createRoute: builder.mutation({
      query: (data) => ({
        url: "/route/create/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Route"], // Invalidate "Route" cache after creating a route
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data,
    }),
    deleteRoute: builder.mutation({
      query: (id) => ({
        url: `/route/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Route"],
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data,
    }),
    getRouteById: builder.query({
      query: (id) => ({
        url: `/route/${id}`,
        method: "GET",
      }),
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data,
    }),
    updateRoute: builder.mutation({
      query: ({ id, data }) => ({
        url: `/route/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Route"], // Invalidate cache for specific route ID
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetAllroutesQuery,
  useCreateRouteMutation,
  useGetRouteByIdQuery,
  useDeleteRouteMutation,
  useUpdateRouteMutation,
  useGetPaginatedRoutesQuery,
} = routeApi;
