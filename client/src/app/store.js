import { configureStore } from '@reduxjs/toolkit'
//import reducers from slices
import goalReducer from '../features/goals/goalSlice'
import authReducer from '../features/auth/authSlice'

//store is made up of slices and the slices are stored elsewhere

export const store = configureStore({
    reducer: {
        auth: authReducer,
        goals: goalReducer,  
    },
})