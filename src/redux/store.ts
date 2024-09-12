import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { videoAPI } from "./services/getData";
import videoSlice from "./features/videoSlice";
import modalSlice from "./features/modalSlice";

export const store = configureStore({
  reducer: {
    [videoAPI.reducerPath]: videoAPI.reducer,
    modalSlice,
    videoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(videoAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
