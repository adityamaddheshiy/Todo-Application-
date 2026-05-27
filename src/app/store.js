import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../Featurs/TodoSlice'

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
})

