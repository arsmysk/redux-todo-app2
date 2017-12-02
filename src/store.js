import { createStore } from 'redux'
import rootReducer from './reducers'

const addLoggingToDispatch = (store) => (rawDispatch) => {
  return (action) => {
    console.group(action.type)
    console.log('%c prev state', 'color: gray', store.getState())
    console.log('%c action', 'color: blue', action)
    const returnValue = rawDispatch(action)
    console.log('%c next state', 'color: green', store.getState())
    console.groupEnd(action.type)
    return returnValue
  }
}

const addPromiseToDispatch = (store) => (rawDispatch) => {
  return (action) => {
    if (typeof action.then === 'function') {
      return action.then(rawDispatch)
    } else {
      return rawDispatch(action)
    }
  }
}

const wrapDispatchWithMiddlewares = (store, middleware) => {
  middleware.slice().reverse().forEach(middleware =>
    store.dispatch = middleware(store)(store.dispatch))
}

const middlewares = [addPromiseToDispatch, addLoggingToDispatch]
let store = createStore(rootReducer)

wrapDispatchWithMiddlewares(store, middlewares)

export default store
