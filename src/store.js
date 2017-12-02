import { createStore } from 'redux'
import rootReducer from './reducers'

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch
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

const addPromiseToDispatch = (store) => {
  const rawDispatch = store.dispatch
  return (action) => {
    if (typeof action.then === 'function') {
      return action.then(rawDispatch)
    } else {
      return rawDispatch(action)
    }
  }
}

let store = createStore(rootReducer)
store.dispatch = addLoggingToDispatch(store)
store.dispatch = addPromiseToDispatch(store)
export default store
