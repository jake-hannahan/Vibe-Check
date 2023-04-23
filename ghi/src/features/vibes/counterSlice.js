import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      if (state.value < 11) {
        state.value += 1
      } else {
        state.value = 0
      }
    },
},
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer
