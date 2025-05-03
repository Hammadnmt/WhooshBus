import { configureStore } from "@reduxjs/toolkit";
import { apiMiddleware, apiReducer } from "../features/baseApi";
import { baseApi } from "../../../BUSPRO/frontend/src/features/baseApi";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: apiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiMiddleware),
});

export default store;
