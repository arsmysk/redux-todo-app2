import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

const addLoggingToDispatch = (store) => (rawDispatch) => (action) => {
  console.group(action.type)
  console.log('%c prev state', 'color: gray', store.getState())
  console.log('%c action', 'color: blue', action)
  const returnValue = rawDispatch(action)
  console.log('%c next state', 'color: green', store.getState())
  console.groupEnd(action.type)
  return returnValue
}

const addPromiseToDispatch = (store) => (rawDispatch) => (action) =>
  typeof action.then === 'function' ? action.then(rawDispatch) : rawDispatch(action)

const thunk = (store) => (rawDispatch) => (action) =>
  typeof action === 'function' ? action(rawDispatch) : rawDispatch(action)


const middlewares = [thunk, addPromiseToDispatch, addLoggingToDispatch]
let store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
