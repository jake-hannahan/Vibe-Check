import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/auth/loginSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/auth";
import signupReducer from "../features/auth/signupSlice";
import { spotifyApi } from "../services/spotify";
import { vibeApi } from "../services/vibes";
import newVibeReducer from "../features/vibes/newVibeSlice";
import counterReducer from "../features/vibes/counterSlice";
import notificationReducer from "../features/vibes/notificationSlice";

export const store = configureStore({
	reducer: {
		login: loginReducer,
		signup: signupReducer,
		[authApi.reducerPath]: authApi.reducer,
		[spotifyApi.reducerPath]: spotifyApi.reducer,
		[vibeApi.reducerPath]: vibeApi.reducer,
		newVibe: newVibeReducer,
		counter: counterReducer,
		notification: notificationReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([authApi.middleware, spotifyApi.middleware, vibeApi.middleware]),
});

setupListeners(store.dispatch);
