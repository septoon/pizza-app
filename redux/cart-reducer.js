const ADD_PIZZA_CART = 'cart/ADD_PIZZA_CART'
const CLEAR_PIZZA_CART = 'cart/CLEAR_PIZZA_CART'
const MINUS_PIZZA = 'cart/MINUS_PIZZA'

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART: {
      let newState =  {
        ...state, 
        items: [...state.items, action.payload],
      }

      let newTotalPrice = 0

      newState.items.forEach(item => newTotalPrice += parseInt(item.activePrice) + 40 )
      
      newState.totalCount = newState.items.length

      newState.totalPrice = newTotalPrice

      return newState
    }
    case CLEAR_PIZZA_CART: {
      let newState = { 
        ...state, items: state.items = []
      }
      newState.totalCount = 0

      newState.totalPrice = 0
      return newState
    }
    case MINUS_PIZZA: {
      const { pizzaId, pizzaSize } = action.payload;
      const updatedItems = state.items.filter(item => item.id !== pizzaId || item.activeSize !== pizzaSize);
      const newTotalPrice = updatedItems.reduce((sum, item) => sum + parseInt(item.activePrice) + 40, 0);
      return {
        ...state,
        items: updatedItems,
        totalCount: updatedItems.length,
        totalPrice: newTotalPrice
      }
    }
    default:
      return state
  }
}

export const addPizzaToCartAC = (pizzaObj) => ({ type: ADD_PIZZA_CART, payload: pizzaObj  })
export const clearPizzaCartAC = () => ({ type: CLEAR_PIZZA_CART })
export const removePizzaAC = (pizzaObj) => ({ type: MINUS_PIZZA, payload: pizzaObj  })

export default cartReducer
