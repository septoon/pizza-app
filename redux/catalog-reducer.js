const ADD_CATALOG_LIST = 'catalog/ADD_CATALOG_LIST'
const TOGGLE_IS_ACTIVE = 'catalog/TOGGLE_IS_ACTIVE'

const initialState = {
  catalogData: [],
  isActive: false
}

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATALOG_LIST:
      return {...state,  catalogData: action.list }
    case TOGGLE_IS_ACTIVE:
      return {...state,  isActive: action.isActive }
    default:
      return state
  }
}

export const addCatalogList = (list) => ({ type: ADD_CATALOG_LIST, list })
export const toggleIsActive = (isActive) => ({ type: TOGGLE_IS_ACTIVE, isActive })

export default catalogReducer
