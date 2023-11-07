const ADD_INGREDIENTS = 'ingredients/ADD_INGREDIENTS'
const TOGGLE_IS_ACTIVE_INGR = 'ingredients/TOGGLE_IS_ACTIVE'

const initialState = {
  ingredientsData: [],
  ingredientsCount: 0,
  ingredientsPrice: 0
}

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENTS: {
      let newState =  {
        ...state, 
        ingredientsData: [...state.ingredientsData, action.payload],
      }

      let newTotalPrice = 0

      newState.ingredientsData.forEach(item => newTotalPrice += item.priceIngr)

      newState.ingredientsCount = newState.ingredientsData.length

      newState.ingredientsPrice = newTotalPrice

      return newState
    }
    default:
      return state
  }
}

export const addIngredientsAC = (payload) => ({ type: ADD_INGREDIENTS, payload })
export const toggleIsActiveIngr = (isActiveIngr) => ({ type: TOGGLE_IS_ACTIVE_INGR, isActiveIngr })

export default ingredientsReducer