import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/auth";
import { vibeApi } from "../services/vibes";
import loginReducer from "../features/auth/loginSlice";
import signupReducer from "../features/auth/signupSlice";
import newVibeReducer from "../features/vibes/newVibeSlice";
import counterReducer from "../features/vibes/counterSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    [authApi.reducerPath]: authApi.reducer,
    [vibeApi.reducerPath]: vibeApi.reducer,
    newVibe: newVibeReducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, vibeApi.middleware]),
});

setupListeners(store.dispatch);
