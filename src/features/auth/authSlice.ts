import { api } from "../baseApi";
const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        credentials: "include",
        url: "/auth/login",
        body: credentials,
        method: "POST",
      }),
      transformResponse: (response, args, meta) => {
        console.log("response", response);
      },
    }),
    handleUser: builder.mutation({
      query: (userInfo) => ({
        body: userInfo,
        url: "/auth/handleuser",
        method: "POST",
      }),
    }),
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/signup",
        body: userData,
        method: "POST",
      }),
      transformResponse: (response, args, meta) => {
        console.log("response", response);
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation, useHandleUserMutation } = authApi;
