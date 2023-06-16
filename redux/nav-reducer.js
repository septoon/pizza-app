const ADD_NAV_LIST = 'nav/ADD_NAV_LIST'
const TOGGLE_IS_ACTIVE = 'nav/TOGGLE_IS_ACTIVE'

const initialState = {
  list: [],
  isOpen: true
}

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAV_LIST:
      return {...state,  list: action.payload }
    case TOGGLE_IS_ACTIVE:
      return {...state,  isOpen: action.payload }
    default:
      return state
  }
}

export const addNavListAC = (list) => ({ type: ADD_NAV_LIST, payload: list })
export const toggleIsActiveAC = (isOpen) => ({ type: TOGGLE_IS_ACTIVE, payload: isOpen })

export default navReducer
