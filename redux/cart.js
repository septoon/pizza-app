import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    items: {},
    totalCount: 0,
    totalPrice: 0 
  },
  reducers: {
    addToCart(state, action) {
      debugger
      state.items += action.payload;
    },
    setTotalCount(state) {
      state.totalCount += 1
    }
  }
})

export default cartSlice.reducer

export const { addToCart, setTotalCount } = cartSlice.actions
