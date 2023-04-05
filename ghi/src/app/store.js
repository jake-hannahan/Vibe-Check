import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/auth/loginSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        login: loginReducer,
    },
    // middleware
})

setupListeners(store.dispatch)
