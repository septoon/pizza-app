const ADD_TEA_CARD_LIST = 'tea/ADD_TEA_CARD_LIST'

const initialState = {
  teaCardData: {}
}

const teaCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEA_CARD_LIST:
      return {...state,  teaCardData: action.list }
    default:
      return state
  }
}

export const addTeaCardList = (list) => ({ type: ADD_TEA_CARD_LIST, list })

export default teaCardReducer
