import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/main/childCount'
import animalReducer from '../components/animal/animalType'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    animal: animalReducer,
  },
})