const toolkitSlice = createSlice(
  name: 'toolkit',
  initialState: {
    count: 0,
    items: []
  },
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload)
    }
  }
)

export default toolkitSlice.reducers
export const addToCart = toolkitSlice.actions