import { configureStore } from '@reduxjs/toolkit'
import carReducer from './Car/CarSlice'

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
})