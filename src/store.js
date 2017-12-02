import { createStore } from 'redux'
import todoListReducer from './reducers/todoListReducer'

export default createStore(todoListReducer)
