import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "Panda",
}


export const animalSlice = createSlice({
  name: 'animal',
  initialState,
  reducers: {
    changeAnimal: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeAnimal } = animalSlice.actions

export default animalSlice.reducer