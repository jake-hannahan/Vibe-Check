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
    set: (state, num) => {
      state.value = num.payload
    }
},
})

export const { increment, set } = counterSlice.actions

export default counterSlice.reducer
