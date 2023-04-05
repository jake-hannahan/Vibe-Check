import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/auth/loginSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from '../services/auth';
import signupReducer from "../features/auth/signupSlice";


export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware]),
});

setupListeners(store.dispatch)
