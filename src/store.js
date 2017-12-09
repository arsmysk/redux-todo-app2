import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

/* Logging middleware */
import addLoggingToDispatch from 'redux-logger'

/* thunk middleware */
import thunk from 'redux-thunk'

let middlewares = [thunk]

let composeMiddlewares
if (process.env.NODE_ENV === 'development') {
  middlewares.push(addLoggingToDispatch)
  composeMiddlewares = composeWithDevTools(applyMiddleware(...middlewares))
} else {
  composeMiddlewares = applyMiddleware(...middlewares)
}

let store = createStore(rootReducer, composeMiddlewares)

export default store
