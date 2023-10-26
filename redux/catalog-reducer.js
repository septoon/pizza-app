const ADD_CATALOG_LIST = 'catalog/ADD_CATALOG_LIST'
const ADD_INGREDIENTS = 'ingredients/ADD_INGREDIENTS'
const TOGGLE_IS_ACTIVE = 'catalog/TOGGLE_IS_ACTIVE'
const TOGGLE_IS_ACTIVE_INGR = 'ingredients/TOGGLE_IS_ACTIVE'


const initialState = {
  catalogData: [],
  ingredientsData: [],
  isActive: false,
  isActiveIngr: false
}

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATALOG_LIST:
      return {...state,  catalogData: action.list }
    case ADD_INGREDIENTS:
      return {...state,  ingredientsData: action.list }
    case TOGGLE_IS_ACTIVE:
      return {...state,  isActive: action.isActive }
    case TOGGLE_IS_ACTIVE_INGR:
      return {...state,  isActiveIngr: action.isActiveIngr }
    default:
      return state
  }
}

export const addCatalogList = (list) => ({ type: ADD_CATALOG_LIST, list })
export const addIngredients = (list) => ({ type: ADD_INGREDIENTS, list })

export const toggleIsActive = (isActive) => ({ type: TOGGLE_IS_ACTIVE, isActive })
export const toggleIsActiveIngr = (isActiveIngr) => ({ type: TOGGLE_IS_ACTIVE_INGR, isActiveIngr })

export default catalogReducer
