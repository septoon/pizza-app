const ADD_INGREDIENTS = 'ingredients/ADD_INGREDIENTS'
const TOGGLE_IS_ACTIVE_INGR = 'ingredients/TOGGLE_IS_ACTIVE'

const initialState = {
  ingredientsData: [],
  isActiveIngr: false
}

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENTS:
      return {...state,  ingredientsData: action.list }
    case TOGGLE_IS_ACTIVE_INGR:
      return {...state,  isActiveIngr: action.isActiveIngr }
    default:
      return state
  }
}

export const addIngredients = (list) => ({ type: ADD_INGREDIENTS, list })
export const toggleIsActiveIngr = (isActiveIngr) => ({ type: TOGGLE_IS_ACTIVE_INGR, isActiveIngr })

export default ingredientsReducer