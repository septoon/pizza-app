import { combineReducers, createStore } from 'redux'

import cartReducer from './cart-reducer'

import catalogReducer from './catalog-reducer'
import deliveryReducer from './delivery-reducer'
import navReducer from './nav-reducer'
import teaCardReducer from './teaCard-reducer'
import appReducer from './app-reducer'

const reducers = combineReducers({
    catalogPage: catalogReducer,
    teaCardPage: teaCardReducer,
    deliveryPage: deliveryReducer,
    cart: cartReducer,
    nav: navReducer,
    app: appReducer
})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // applyMiddleware for thunk

window.store = store
