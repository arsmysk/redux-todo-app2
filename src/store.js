import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

/* Logging middleware */
import addLoggingToDispatch from 'redux-logger'

/* thunk middleware */
import thunk from 'redux-thunk'

const middlewares = [thunk, addLoggingToDispatch]
let store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
