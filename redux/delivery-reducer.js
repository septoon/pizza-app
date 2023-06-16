const ADD_DELIVERY_LIST = 'catalog/ADD_DELIVERY_LIST'

const initialState = {
  deliveryListData: []
}

const deliveryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DELIVERY_LIST:
      return {...state,  deliveryListData: action.list }
    default:
      return state
  }
}

export const addDeliveryList = (list) => ({ type: ADD_DELIVERY_LIST, list })

export default deliveryReducer
